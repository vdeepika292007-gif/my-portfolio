// Run with Node 22+ and an installed Chromium browser. No npm packages required.
// BROWSER_PATH can override the default Windows Edge executable.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');
const { setTimeout: delay } = require('node:timers/promises');

const root = path.resolve(__dirname, '..');
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'deepika-runtime-test-'));
const browserPath = process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.svg': 'image/svg+xml', '.json': 'application/json' };
const fixture = `<!doctype html><div id="vue-app"></div>
<script src="./assets/portfolio-interactive.js"></script>
<script>
window.mountFixture = () => {
  document.querySelector('#vue-app').innerHTML = '<nav class="navbarBlock"><div class="navbarBlock__right"></div></nav><div class="introBlock"><div class="introBlock__bottom"></div></div><div class="projectBlock__title"></div>' + '<section class="projectBlock"><div class="projectBlock"><div class="projectBlock__informations"></div></div></section>'.repeat(6);
};
// Match a cold hosted load: Vue mounts after the enhancer's DOMContentLoaded.
setTimeout(mountFixture, 120);
</script>`;

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/my-portfolio/__fixture.html') {
    res.setHeader('Content-Type', mime['.html']); res.end(fixture); return;
  }
  if (!pathname.startsWith('/my-portfolio/')) { res.writeHead(404).end(); return; }
  const relative = decodeURIComponent(pathname.slice('/my-portfolio/'.length)) || 'index.html';
  const filename = path.resolve(root, relative);
  if (!filename.startsWith(root + path.sep) || !fs.existsSync(filename) || !fs.statSync(filename).isFile()) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', mime[path.extname(filename)] || 'application/octet-stream');
  const send = () => fs.createReadStream(filename).pipe(res);
  if (relative === 'assets/models/global/flower/flower_v2.glb' && process.env.TEST_ASSET_DELAY) setTimeout(send, Number(process.env.TEST_ASSET_DELAY));
  else send();
});

let browser, ws, nextId = 0;
const pending = new Map(), errors = [], failedRequests = [];
function command(method, params = {}, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const id = ++nextId;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`${method} timed out`)); }, timeout);
    pending.set(id, { resolve, reject, timer });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await command('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, 45000);
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
async function until(expression, timeout = 45000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { if (await evaluate(expression)) return; await delay(300); }
  throw new Error('Condition did not become true: ' + expression);
}

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}/my-portfolio/`;
  browser = spawn(browserPath, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--disable-sync', '--enable-unsafe-swiftshader', 'about:blank'], { stdio: 'ignore', windowsHide: true });
  const endpointFile = path.join(profile, 'DevToolsActivePort');
  for (let n = 0; n < 100 && !fs.existsSync(endpointFile); n++) await delay(100);
  const port = fs.readFileSync(endpointFile, 'utf8').split('\n')[0];
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(resolve => ws.addEventListener('open', resolve, { once: true }));
  ws.addEventListener('message', ({ data }) => {
    const msg = JSON.parse(data);
    if (msg.id && pending.has(msg.id)) {
      const task = pending.get(msg.id); pending.delete(msg.id); clearTimeout(task.timer);
      msg.error ? task.reject(new Error(JSON.stringify(msg.error))) : task.resolve(msg.result);
    }
    if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
    if (msg.method === 'Network.responseReceived' && msg.params.response.status >= 400) failedRequests.push({ url: msg.params.response.url, status: msg.params.response.status });
  });
  await command('Runtime.enable'); await command('Page.enable'); await command('Network.enable');
  const guard = await command('Page.addScriptToEvaluateOnNewDocument', { source: `
    window.__observerLoops = [];
    const NativeObserver = window.MutationObserver;
    window.MutationObserver = class extends NativeObserver {
      constructor(callback) {
        const created = new Error().stack; let count = 0;
        super((records, observer) => {
          // Stop runaway microtasks so the failing regression can report instead of freezing CI.
          if (++count > 100) { observer.disconnect(); window.__observerLoops.push(created); return; }
          callback(records, observer);
        });
      }
    };
  ` });
  await command('Page.navigate', { url: base + '__fixture.html' });
  await until('document.querySelectorAll(".deepika-project-card").length === 5');
  await delay(400);
  assert.deepEqual(await evaluate('window.__observerLoops'), [], 'An observer repeatedly triggered itself during delayed mounting');
  assert.equal(await evaluate('document.querySelectorAll(".deepika-internship-card").length'), 1);
  await evaluate('window.firstCard = document.querySelector(".deepika-project-card"); document.querySelector("#projectSearchInput").value = "MindVault"; document.querySelector("#projectSearchInput").dispatchEvent(new Event("input")); document.body.append(document.createElement("aside")); document.querySelector("#vue-app").append(document.createElement("span"));');
  await delay(300);
  assert.equal(await evaluate('window.firstCard === document.querySelector(".deepika-project-card")'), true, 'Unrelated changes must preserve cards and handlers');
  assert.equal(await evaluate('document.querySelector("#projectSearchInput").value'), 'MindVault');
  assert.equal(await evaluate('[...document.querySelectorAll(".projectBlock")].filter(el => !el.parentElement.closest(".projectBlock")).slice(0,5).filter(el => el.style.display !== "none").length'), 1);
  await evaluate('mountFixture()');
  await until('document.querySelectorAll(".deepika-project-card").length === 5 && !!document.querySelector(".navbar-clean-actions")');
  await delay(300);
  assert.deepEqual(await evaluate('window.__observerLoops'), [], 'Route remounting must not restart the loop');
  console.log('PASS: delayed mounting, stable cards, search, navigation controls and route remounting');
  if (process.argv.includes('--fixture-only')) return;

  // Real app, real WebGL, project subdirectory, and an empty browser cache.
  // Run the real app without the fixture's observer circuit breaker.
  await command('Page.removeScriptToEvaluateOnNewDocument', { identifier: guard.identifier });
  await command('Page.addScriptToEvaluateOnNewDocument', { source: 'window.__observerLoops = [];' });
  const remote = process.argv.find(arg => arg.startsWith('--url='))?.slice(6);
  await command('Network.setCacheDisabled', { cacheDisabled: true });
  await command('Emulation.setCPUThrottlingRate', { rate: Number(process.env.TEST_CPU_RATE || 1) });
  await command('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
  errors.length = 0; failedRequests.length = 0;
  await command('Page.navigate', { url: remote || base });
  await until(`document.querySelectorAll('.deepika-project-card').length === 5 && (() => {
    const loader = document.querySelector('.loaderBlock');
    if (!loader) return true;
    const style = getComputedStyle(loader);
    return style.display === 'none' || style.opacity === '0' || style.pointerEvents === 'none';
  })()`, 90000);
  await delay(1500);
  const state = await evaluate(`({ title: document.title, loops: window.__observerLoops, cards: document.querySelectorAll('.deepika-project-card').length, status: window.__DEEPIKA_3D_STATUS?.state, canonical: document.querySelector('link[rel=canonical]')?.href, image: document.querySelector('meta[property="og:image"]')?.content })`);
  assert.match(state.title, /Deepika/); assert.deepEqual(state.loops, []); assert.equal(state.cards, 5);
  assert.deepEqual(await evaluate('[...document.querySelectorAll(".deepika-project-card .deepika-card-title")].map(el => el.textContent)'), ['MindVault', 'Multi Vault', 'Campus Placement Management System', 'Heart Disease Prediction', 'Code Debug Game']);
  assert.ok(!state.canonical.includes('github.com/')); assert.ok(!state.image.includes('github.com/'));
  await evaluate('window.__heartbeat = 0; window.__heartbeatTimer = setInterval(() => window.__heartbeat++, 50)');
  await delay(700);
  assert.ok(await evaluate('window.__heartbeat') >= 3, 'The event loop must remain responsive');
  await evaluate('clearInterval(window.__heartbeatTimer); window.__certShown = false; document.querySelector("#certModal").addEventListener("shown.bs.modal", () => window.__certShown = true, {once:true}); document.querySelector("#navBtnCert").click()');
  await until('window.__certShown');
  await evaluate('bootstrap.Modal.getInstance(document.querySelector("#certModal")).hide()');
  await until('getComputedStyle(document.querySelector("#certModal")).display === "none"');
  await evaluate('location.hash = "#/about"');
  await until('document.title === "About - Deepika V" && !document.querySelector(".pageTransitionOverlay") && document.querySelectorAll(".deepika-project-card").length === 0 && !!document.querySelector(".navbar-clean-actions")');
  await evaluate('location.hash = "#/"');
  await until('document.querySelectorAll(".deepika-project-card").length === 5 && document.title.includes("Portfolio") && !document.querySelector(".pageTransitionOverlay")');
  console.log('APP_STATE', JSON.stringify(state));
  console.log('RUNTIME_ERRORS', JSON.stringify(errors));
  console.log('FAILED_REQUESTS', JSON.stringify(failedRequests));
  assert.deepEqual(errors, [], 'The real page must not throw uncaught exceptions');
  const screenshot = process.env.TEST_SCREENSHOT;
  if (screenshot) { const result = await command('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(screenshot, Buffer.from(result.data, 'base64')); }
  console.log('PASS: cold app load, title, responsive event loop and certificate modal');
})().catch(async error => {
  console.error(error); process.exitCode = 1;
  console.log('RUNTIME_ERRORS', JSON.stringify(errors));
  console.log('FAILED_REQUESTS', JSON.stringify(failedRequests));
  if (ws?.readyState === WebSocket.OPEN) {
    try { console.log('FAILURE_STATE', await evaluate(`({title:document.title,cards:document.querySelectorAll('.deepika-project-card').length,status:window.__DEEPIKA_3D_STATUS?.state,loops:window.__observerLoops,loader:document.querySelector('.loaderBlock')?.outerHTML.slice(0,800)})`)); } catch {}
  }
}).finally(async () => {
  for (const task of pending.values()) { clearTimeout(task.timer); task.reject(new Error('Browser closed')); }
  pending.clear();
  if (ws?.readyState === WebSocket.OPEN) { try { await command('Browser.close', {}, 3000); } catch {} ws.close(); }
  browser?.kill(); browser?.unref(); server.closeAllConnections(); server.close();
  // Keep profile files in the OS temp directory; never add them to the repository.
  setTimeout(() => process.exit(process.exitCode || 0), 100);
});
