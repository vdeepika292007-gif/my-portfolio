// Aurora studio: backgrounds only. Project images use their own material.
uniform vec3 uColor;
varying vec2 vPaletteUv;

void main() {
    vec2 uv = vPaletteUv;
    float leftGlow = exp(-3.5 * dot((uv - vec2(0.0, 0.85)) * vec2(1.1, 1.0),
                                   (uv - vec2(0.0, 0.85)) * vec2(1.1, 1.0)));
    float rightGlow = exp(-4.0 * dot(uv - vec2(1.0, 0.2), uv - vec2(1.0, 0.2)));
    vec3 color;
    if (uColor.g < 0.4) {
        // About: plum dusk, indigo and a muted aqua glow.
        color = mix(vec3(0.13, 0.11, 0.27), vec3(0.22, 0.17, 0.41), uv.y);
        color = mix(color, vec3(0.12, 0.35, 0.40), leftGlow * 0.6);
        color = mix(color, vec3(0.35, 0.19, 0.37), rightGlow * 0.45);
    } else if (uColor.b < 0.2) {
        // Playground: more saturated lilac with aqua and apricot edges.
        color = mix(vec3(0.87, 0.79, 1.0), vec3(0.77, 0.84, 1.0), uv.y);
        color = mix(color, vec3(0.63, 0.91, 0.89), leftGlow * 0.7);
        color = mix(color, vec3(1.0, 0.78, 0.70), rightGlow * 0.75);
    } else {
        // Work: airy lavender, warm peach and pale aqua.
        color = mix(vec3(0.95, 0.91, 0.99), vec3(0.90, 0.87, 0.98), uv.y);
        color = mix(color, vec3(0.77, 0.91, 0.92), leftGlow * 0.5);
        color = mix(color, vec3(1.0, 0.84, 0.78), rightGlow * 0.65);
    }
    gl_FragColor = vec4(color, 1.0);
}
