import React, { useState } from 'react';
import {
  Gamepad2,
  CheckCircle2,
  XCircle,
  Play,
  RotateCcw,
  ExternalLink,
  Code2,
  Sliders,
  Terminal,
  Heart,
  HeartPulse,
  Flame,
  AlertTriangle,
  Zap,
  Bug,
  Eye,
  Lightbulb,
  Trophy,
  Sparkles,
  Check,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'debugger' | 'ml'>('debugger');

  /* =========================================================================
     1. HEART DISEASE ML SIMULATOR: CLINICAL STATE & LOGIC
     ========================================================================= */
  const [age, setAge] = useState(48);
  const [bp, setBp] = useState(128); // mm Hg
  const [cholesterol, setCholesterol] = useState(215); // mg/dL
  const [maxHeartRate, setMaxHeartRate] = useState(155); // bpm
  const [chestPain, setChestPain] = useState<'non-anginal' | 'atypical' | 'typical' | 'asymptomatic'>('non-anginal');
  const [exerciseAngina, setExerciseAngina] = useState(false);
  const [activePersona, setActivePersona] = useState<string>('custom');

  const applyPersona = (preset: {
    id: string;
    age: number;
    bp: number;
    chol: number;
    maxHr: number;
    cp: 'non-anginal' | 'atypical' | 'typical' | 'asymptomatic';
    angina: boolean;
  }) => {
    setActivePersona(preset.id);
    setAge(preset.age);
    setBp(preset.bp);
    setCholesterol(preset.chol);
    setMaxHeartRate(preset.maxHr);
    setChestPain(preset.cp);
    setExerciseAngina(preset.angina);
  };

  const calculateRiskAndFactors = () => {
    const ageImpact = Math.max(0, Math.round((age - 30) * 0.55));
    const bpImpact = Math.max(0, Math.round((bp - 110) * 0.35));
    const cholImpact = Math.max(0, Math.round((cholesterol - 180) * 0.22));
    const hrProtection = Math.max(0, Math.round((maxHeartRate - 120) * 0.28));

    let symptomImpact = 0;
    if (chestPain === 'typical') symptomImpact += 24;
    else if (chestPain === 'asymptomatic') symptomImpact += 30;
    else if (chestPain === 'atypical') symptomImpact += 10;

    if (exerciseAngina) symptomImpact += 22;

    let score = -4.5;
    score += (age - 30) * 0.055;
    score += (bp - 110) * 0.025;
    score += (cholesterol - 180) * 0.018;
    score -= (maxHeartRate - 120) * 0.022;

    if (chestPain === 'typical') score += 1.25;
    if (chestPain === 'asymptomatic') score += 1.85;
    if (chestPain === 'atypical') score += 0.45;
    if (exerciseAngina) score += 1.45;

    const probability = 1 / (1 + Math.exp(-score));
    const riskPercentage = Math.min(Math.max(Math.round(probability * 100), 3), 97);

    return {
      riskPercentage,
      factors: [
        { name: 'Age Factor', impact: ageImpact, type: 'risk' },
        { name: 'Blood Pressure', impact: bpImpact, type: bp >= 130 ? 'risk' : 'neutral' },
        { name: 'Serum Cholesterol', impact: cholImpact, type: cholesterol >= 220 ? 'risk' : 'neutral' },
        { name: 'Chest Pain & Angina', impact: symptomImpact, type: symptomImpact > 10 ? 'risk' : 'neutral' },
        { name: 'Heart Rate Aerobic Reserve', impact: hrProtection, type: 'protective' },
      ],
    };
  };

  const { riskPercentage, factors } = calculateRiskAndFactors();

  const getBpZone = (val: number) => {
    if (val < 120) return { label: 'Optimal (<120)', color: 'text-emerald-600 dark:text-emerald-400' };
    if (val <= 129) return { label: 'Elevated (120-129)', color: 'text-amber-600 dark:text-amber-400' };
    if (val <= 139) return { label: 'Stage 1 HTN (130-139)', color: 'text-orange-600 dark:text-orange-400' };
    return { label: 'Stage 2 HTN (140+)', color: 'text-rose-600 dark:text-rose-400' };
  };

  const getCholZone = (val: number) => {
    if (val < 200) return { label: 'Desirable (<200)', color: 'text-emerald-600 dark:text-emerald-400' };
    if (val <= 239) return { label: 'Borderline (200-239)', color: 'text-amber-600 dark:text-amber-400' };
    return { label: 'High Risk (240+)', color: 'text-rose-600 dark:text-rose-400' };
  };

  const getRiskCategory = (score: number) => {
    if (score < 30) {
      return {
        label: 'Low Cardiovascular Risk',
        level: 'Normal / Healthy Range',
        badge: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
        barColor: '#10b981',
        recommendation:
          'Clinical parameters indicate favorable cardiovascular health. Continue regular physical activity and a balanced diet.',
      };
    } else if (score < 65) {
      return {
        label: 'Moderate Risk (Borderline)',
        level: 'Monitoring Recommended',
        badge: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-800',
        barColor: '#f59e0b',
        recommendation:
          'Borderline markers detected (cholesterol or elevated blood pressure). Routine monitoring and lifestyle adjustments advised.',
      };
    } else {
      return {
        label: 'High Clinical Risk',
        level: 'Clinical Action Advised',
        badge: 'bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800',
        barColor: '#f43f5e',
        recommendation:
          'Elevated indicator profile detected. Comprehensive medical consultation (stress ECG, coronary evaluation) is advised.',
      };
    }
  };

  const riskCat = getRiskCategory(riskPercentage);
  const bpZone = getBpZone(bp);
  const cholZone = getCholZone(cholesterol);
  const targetMaxHr = 220 - age;

  /* =========================================================================
     2. CODE DEBUG GAME: EXPANDED CHALLENGES & GAMIFICATION
     ========================================================================= */
  const debugChallenges = [
    {
      id: 1,
      title: 'Challenge 01: Palindrome String Normalization',
      language: 'JavaScript',
      difficulty: 'Easy',
      fileName: 'palindrome.js',
      bugDescription: 'Function fails on mixed casing ("Racecar") and punctuation spaces ("A man, a plan: Panama").',
      hint: 'Remember that palindromes ignore case and punctuation symbols. Check how cleanStr is assigned before reversing.',
      buggyLineNumber: 3,
      buggyCodeRaw: '  const cleanStr = str; // Bug: No normalization!',
      patchedCodeRaw: "  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');",
      codeSnippet: `function isPalindrome(str) {
  // Bug is in string normalization:
  const cleanStr = str; // Missing lowercase & regex filter!
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}`,
      options: [
        { id: 'A', text: "Change '===' to '=='", isCorrect: false, feedback: "Incorrect. Strict equality is not the problem." },
        { id: 'B', text: "Normalize with: str.toLowerCase().replace(/[^a-z0-9]/g, '')", isCorrect: true, feedback: "Spot on! Lowercasing and stripping non-alphanumeric symbols fixes all test cases." },
        { id: 'C', text: "Use cleanStr.slice(0, cleanStr.length - 1)", isCorrect: false, feedback: "Incorrect. Slicing truncates valid characters." }
      ],
      testCases: [
        { name: 'Test 1', input: '"Racecar"', expected: 'true', runMs: '1.2ms' },
        { name: 'Test 2', input: '"A man, a plan, a canal: Panama"', expected: 'true', runMs: '2.1ms' },
        { name: 'Test 3', input: '"hello world"', expected: 'false', runMs: '0.8ms' }
      ]
    },
    {
      id: 2,
      title: 'Challenge 02: Maximum Subarray Sum (Kadane)',
      language: 'Python',
      difficulty: 'Medium',
      fileName: 'kadane_max.py',
      bugDescription: 'Initial max_sum = 0 returns 0 on all-negative lists like [-3, -1, -5] instead of the maximum element (-1).',
      hint: 'When all numbers in an array are negative, max_sum initialized to 0 is higher than any element. What should it start with?',
      buggyLineNumber: 2,
      buggyCodeRaw: '    max_sum = 0  # Bug: Initializing with 0 fails on negatives!',
      patchedCodeRaw: '    max_sum = nums[0]  # Correct: Starts with first element',
      codeSnippet: `def max_sub_array(nums):
    max_sum = 0  # Bug: 0 is larger than any negative number!
    current_sum = 0
    for x in nums:
        current_sum = max(x, current_sum + x)
        max_sum = max(max_sum, current_sum)
    return max_sum`,
      options: [
        { id: 'A', text: "Remove max(x, current_sum + x)", isCorrect: false, feedback: "Incorrect. Kadane algorithm requires comparing starting fresh vs extending." },
        { id: 'B', text: "Initialize max_sum = nums[0] (or float('-inf'))", isCorrect: true, feedback: "Correct! Initializing with nums[0] correctly handles all-negative arrays like [-3, -1, -5]." },
        { id: 'C', text: "Sort nums in descending order first", isCorrect: false, feedback: "Incorrect. Sorting destroys contiguous subarray order." }
      ],
      testCases: [
        { name: 'Test 1', input: '[-2, 1, -3, 4, -1, 2, 1, -5, 4]', expected: '6', runMs: '1.4ms' },
        { name: 'Test 2', input: '[-3, -1, -5]', expected: '-1', runMs: '0.9ms' },
        { name: 'Test 3', input: '[5, 4, -1, 7, 8]', expected: '23', runMs: '1.1ms' }
      ]
    },
    {
      id: 3,
      title: 'Challenge 03: React State Immutability Bug',
      language: 'TypeScript',
      difficulty: 'Medium',
      fileName: 'todo_state.tsx',
      bugDescription: 'Direct array mutation (todos.push) prevents React from detecting state change, so UI never re-renders.',
      hint: 'React state must be treated as immutable. You should never modify an array in place with .push()!',
      buggyLineNumber: 3,
      buggyCodeRaw: '  todos.push(newItem); // Bug: Mutating state directly!',
      patchedCodeRaw: '  setTodos([...todos, newItem]); // Correct: Immutable copy',
      codeSnippet: `function addTodo(newItem) {
  // Direct mutation bug:
  todos.push(newItem); // React state reference unchanged!
  setTodos(todos);
}`,
      options: [
        { id: 'A', text: "Use todos.concat() without calling setTodos", isCorrect: false, feedback: "Incorrect. State must always be updated through setter." },
        { id: 'B', text: "Create a new array: setTodos([...todos, newItem])", isCorrect: true, feedback: "Perfect! Spread operator creates a fresh array reference, prompting React to re-render cleanly." },
        { id: 'C', text: "Change newItem to a string before pushing", isCorrect: false, feedback: "Incorrect. Data type is not the re-render issue." }
      ],
      testCases: [
        { name: 'Test 1', input: 'addTodo("Study Data Structures")', expected: 'rerendered: true', runMs: '3.2ms' },
        { name: 'Test 2', input: 'todos.length checks', expected: 'length + 1', runMs: '1.0ms' },
        { name: 'Test 3', input: 'State reference equality', expected: 'prev !== next', runMs: '0.7ms' }
      ]
    }
  ];

  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState<{ isCorrect: boolean; feedback: string } | null>(null);
  const [debugScore, setDebugScore] = useState(150);
  const [streakCount, setStreakCount] = useState(1);
  const [showXpPopup, setShowXpPopup] = useState(false);
  const [testsRunning, setTestsRunning] = useState(false);
  const [testStatuses, setTestStatuses] = useState<('idle' | 'running' | 'pass' | 'fail')[]>(['idle', 'idle', 'idle']);
  const [viewMode, setViewMode] = useState<'editor' | 'diff'>('editor');
  const [showHint, setShowHint] = useState(false);
  const [bugSpeech, setBugSpeech] = useState<string | null>("Hey! I broke this code! Can you spot my bug?");

  const activeChallenge = debugChallenges[currentChallengeIndex];

  // Handle option selection
  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
    const chosen = activeChallenge.options.find((o) => o.id === optionId);
    if (!chosen) return;

    setTestsRunning(true);
    setTestStatuses(['running', 'running', 'running']);

    setTimeout(() => {
      if (chosen.isCorrect) {
        setTestStatuses(['pass', 'pass', 'pass']);
        setGameResult({ isCorrect: true, feedback: chosen.feedback });
        setDebugScore((prev) => prev + 50);
        setStreakCount((prev) => prev + 1);
        setShowXpPopup(true);
        setTimeout(() => setShowXpPopup(false), 1400);
        setBugSpeech("Aargh! You squashed me! All tests passed! 🎉");
      } else {
        setTestStatuses(['fail', 'fail', 'fail']);
        setGameResult({ isCorrect: false, feedback: chosen.feedback });
        setStreakCount(1);
        setBugSpeech("Haha! Nice try, human! Tests are still failing!");
      }
      setTestsRunning(false);
    }, 600);
  };

  const handleNextChallenge = () => {
    setSelectedOption(null);
    setGameResult(null);
    setTestStatuses(['idle', 'idle', 'idle']);
    setShowHint(false);
    setViewMode('editor');
    setBugSpeech("New code loaded! Catch me if you can!");
    setCurrentChallengeIndex((prev) => (prev + 1) % debugChallenges.length);
  };

  const handleResetChallenge = () => {
    setSelectedOption(null);
    setGameResult(null);
    setTestStatuses(['idle', 'idle', 'idle']);
    setShowHint(false);
    setViewMode('editor');
    setBugSpeech("Challenge reset! Try finding the bug!");
  };

  const handleBugClick = () => {
    if (gameResult?.isCorrect) {
      setBugSpeech("I am already squashed! Move to the next challenge!");
    } else {
      const taunts = [
        "Ouch! Don't poke me, fix the code!",
        "Hehe! Check line " + activeChallenge.buggyLineNumber + " if you dare!",
        "I love breaking production code!",
        "Can you pass all 3 unit tests?"
      ];
      setBugSpeech(taunts[Math.floor(Math.random() * taunts.length)]);
    }
  };

  return (
    <section id="interactive-lab" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Interactive Project Showcase</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Live Project Playground
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Interactive playgrounds for my projects: play the animated algorithmic debugging game or test the real-time clinical ML model.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('debugger')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                activeTab === 'debugger'
                  ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>🎮 Code Debug Game (Playable Arcade)</span>
            </button>

            <button
              onClick={() => setActiveTab('ml')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                activeTab === 'ml'
                  ? 'bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <HeartPulse className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>🩺 Heart Disease ML Predictor</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            TAB 1: PLAYABLE CODE DEBUG GAME (ANIMATED OBJECTS & GAMIFIED HUD)
            ========================================================================= */}
        {activeTab === 'debugger' && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] shadow-sm p-6 sm:p-8 relative overflow-hidden">
            {/* Top Arcade HUD Strip */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800 gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-300 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    {activeChallenge.language}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Difficulty: <strong className="text-slate-700 dark:text-slate-300">{activeChallenge.difficulty}</strong>
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono">
                    • Level {activeChallenge.id} of {debugChallenges.length}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  {activeChallenge.title}
                </h3>
              </div>

              {/* Gamified HUD: XP Counter, Streak, and Repo Link */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Floating XP Popup */}
                {showXpPopup && (
                  <div className="absolute top-16 right-16 z-30 animate-float-xp bg-amber-400 text-slate-950 font-mono font-bold text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    +50 XP!
                  </div>
                )}

                {/* Score badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-300 font-mono text-xs font-bold">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>XP: {debugScore}</span>
                </div>

                {/* Streak badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                  <span>Streak: {streakCount}x</span>
                </div>

                <a
                  href="https://github.com/vdeepika292007-gif/Code-Debug-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Repo</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick Level Switcher Pills */}
            <div className="py-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 text-xs">
              <span className="text-[11px] font-mono text-slate-500">Select Challenge:</span>
              <div className="flex flex-wrap gap-1.5">
                {debugChallenges.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setCurrentChallengeIndex(i);
                      setSelectedOption(null);
                      setGameResult(null);
                      setTestStatuses(['idle', 'idle', 'idle']);
                      setShowHint(false);
                      setViewMode('editor');
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition ${
                      currentChallengeIndex === i
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    0{c.id}: {c.language}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Arcade Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
              {/* Left Column: Interactive Code Terminal & Animated Bug Mascot (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Code Terminal Box */}
                <div className="rounded-xl border border-slate-800 bg-[#0b0e14] overflow-hidden text-xs sm:text-sm font-mono shadow-md relative">
                  {/* Editor Window Header with Animated Bug Mascot */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-400 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-1 text-slate-300 font-semibold">{activeChallenge.fileName}</span>
                    </div>

                    {/* View Switcher: Code vs Diff */}
                    <div className="flex items-center gap-1.5 bg-slate-950 p-0.5 rounded-md border border-slate-800 text-[11px]">
                      <button
                        onClick={() => setViewMode('editor')}
                        className={`px-2 py-0.5 rounded transition ${
                          viewMode === 'editor'
                            ? 'bg-slate-800 text-teal-400 font-semibold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Code
                      </button>
                      <button
                        onClick={() => setViewMode('diff')}
                        className={`px-2 py-0.5 rounded transition ${
                          viewMode === 'diff'
                            ? 'bg-slate-800 text-teal-400 font-semibold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Diff Patch
                      </button>
                    </div>
                  </div>

                  {/* ANIMATED BUG MASCOT BANNER */}
                  <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {/* Animated Bug Object */}
                      <button
                        onClick={handleBugClick}
                        title="Click to interact with Buggy!"
                        className="relative group cursor-pointer focus:outline-none"
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform ${
                            gameResult?.isCorrect
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-bug-wiggle hover:scale-125'
                          }`}
                        >
                          {gameResult?.isCorrect ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Bug className="w-4 h-4 text-rose-400" />
                          )}
                        </div>
                      </button>

                      {/* Bug Speech Bubble */}
                      <div className="text-[11px] font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>{bugSpeech}</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                      Click the bug for clues!
                    </span>
                  </div>

                  {/* Code Snippet / Diff Display */}
                  <div className="p-4 sm:p-5 text-slate-200 overflow-x-auto leading-relaxed">
                    {viewMode === 'editor' ? (
                      <pre>
                        <code>{activeChallenge.codeSnippet}</code>
                      </pre>
                    ) : (
                      <div className="space-y-1 font-mono text-xs">
                        <div className="text-slate-500 text-[11px] pb-1">
                          @@ -{activeChallenge.buggyLineNumber},1 +{activeChallenge.buggyLineNumber},1 @@
                        </div>
                        <div className="p-1.5 rounded bg-rose-950/40 text-rose-300 border border-rose-800/40 flex items-center gap-2">
                          <span className="text-rose-500 font-bold select-none">-</span>
                          <code>{activeChallenge.buggyCodeRaw}</code>
                        </div>
                        <div className="p-1.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 flex items-center gap-2">
                          <span className="text-emerald-500 font-bold select-none">+</span>
                          <code>{activeChallenge.patchedCodeRaw}</code>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bug Context & Hint Reveal */}
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Bug Context: </span>
                        {activeChallenge.bugDescription}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200 hover:underline"
                    >
                      <Lightbulb className="w-3 h-3" />
                      <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
                    </button>
                  </div>

                  {showHint && (
                    <div className="p-3 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-xs text-teal-900 dark:text-teal-200 font-mono animate-fade-in flex items-center gap-2">
                      <Eye className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>💡 <strong>Developer Hint:</strong> {activeChallenge.hint}</span>
                    </div>
                  )}
                </div>

                {/* ANIMATED STEP-BY-STEP UNIT TEST RUNNER */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      Automated Unit Test Suite:
                    </span>
                    <span>3 Test Assertions</span>
                  </div>

                  <div className="space-y-1.5">
                    {activeChallenge.testCases.map((tc, i) => {
                      const status = testStatuses[i];
                      return (
                        <div
                          key={i}
                          className={`p-2.5 rounded-lg border font-mono text-xs flex items-center justify-between transition-all ${
                            status === 'pass'
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400/60 text-emerald-900 dark:text-emerald-200'
                              : status === 'fail'
                              ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-400/60 text-rose-900 dark:text-rose-200'
                              : status === 'running'
                              ? 'bg-teal-50 dark:bg-teal-950/30 border-teal-400/50 text-teal-800 dark:text-teal-200 animate-pulse'
                              : 'bg-white dark:bg-[#0b0e14] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-slate-400 text-[10px]">{tc.name}:</span>
                            <span className="font-semibold truncate">{tc.input}</span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-[11px] text-slate-500">➜ {tc.expected}</span>
                            {status === 'running' && (
                              <span className="text-[10px] text-teal-600 animate-spin font-bold">⟳</span>
                            )}
                            {status === 'pass' && (
                              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>PASS ({tc.runMs})</span>
                              </span>
                            )}
                            {status === 'fail' && (
                              <span className="inline-flex items-center gap-1 text-[11px] text-rose-600 dark:text-rose-400 font-bold">
                                <XCircle className="w-3.5 h-3.5" />
                                <span>FAIL</span>
                              </span>
                            )}
                            {status === 'idle' && (
                              <span className="text-[10px] text-slate-400 font-mono">Ready</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Fix Options & Action Controls (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                    <Code2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    Select the code fix:
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">Click to run tests</span>
                </div>

                <div className="space-y-2.5">
                  {activeChallenge.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      disabled={testsRunning}
                      className={`w-full text-left p-3.5 rounded-xl border transition text-xs font-mono flex items-start gap-3 ${
                        selectedOption === opt.id
                          ? opt.isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-sm'
                            : 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 shadow-sm'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:border-teal-500 hover:shadow-xs'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-md text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedOption === opt.id
                          ? opt.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {opt.id}
                      </span>
                      <span className="leading-relaxed">{opt.text}</span>
                    </button>
                  ))}
                </div>

                {/* Animated Test Execution Loader */}
                {testsRunning && (
                  <div className="p-3.5 rounded-xl border border-teal-500/30 bg-teal-50 dark:bg-teal-950/30 text-center text-xs text-teal-800 dark:text-teal-300 font-mono animate-pulse flex items-center justify-center gap-2">
                    <Play className="w-3.5 h-3.5 animate-spin text-teal-600" />
                    <span>Executing test cases in sandbox...</span>
                  </div>
                )}

                {/* Result Feedback Banner */}
                {gameResult && !testsRunning && (
                  <div
                    className={`p-4 rounded-xl border text-xs animate-fade-in ${
                      gameResult.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold mb-1 text-sm">
                      {gameResult.isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span>All 3 Tests Passed! (+50 XP)</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                          <span>Assertion Error — Tests Failed</span>
                        </>
                      )}
                    </div>
                    <p className="leading-relaxed opacity-90">{gameResult.feedback}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={handleNextChallenge}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <span>Next Bug Challenge</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>

                  <button
                    onClick={handleResetChallenge}
                    className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    title="Reset challenge"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: HEART DISEASE ML PREDICTOR
            ========================================================================= */}
        {activeTab === 'ml' && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] shadow-sm overflow-hidden">
            {/* Top Telemetry Header Bar */}
            <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-300">
                    <HeartPulse className="w-3.5 h-3.5 animate-pulse text-rose-500" />
                    Live ML Inference
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Cleveland Heart Disease Dataset (UCI ML Repository)
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  Cardiovascular Risk Assessment Model
                </h3>
              </div>

              {/* Heartbeat Monitor Mini-Telemetry strip */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-3 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0e14]">
                  <div className="relative">
                    <Heart className="w-5 h-5 text-rose-500 animate-heartbeat fill-rose-500/30" />
                  </div>
                  <div className="w-24 h-6 overflow-hidden relative opacity-80">
                    <svg className="w-48 h-6 animate-ecg-scroll" viewBox="0 0 200 24">
                      <polyline
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,12 20,12 25,12 30,3 35,21 40,12 45,12 60,12 80,12 85,12 90,3 95,21 100,12 105,12 120,12 140,12 145,12 150,3 155,21 160,12 165,12 180,12 200,12"
                      />
                    </svg>
                  </div>
                  <div className="text-[11px] font-mono text-right">
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      {Math.round(maxHeartRate * 0.48)} bpm
                    </div>
                    <div className="text-[9px] text-teal-700 dark:text-teal-400">Sinus Rhythm</div>
                  </div>
                </div>

                <a
                  href="https://github.com/vdeepika292007-gif/heart-disease-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 transition"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick Interactive Personas */}
            <div className="px-5 sm:px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <span>Select Patient Profile:</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    id: 'athlete',
                    label: '🏃 Athletic Youth (26y)',
                    age: 26,
                    bp: 112,
                    chol: 168,
                    maxHr: 185,
                    cp: 'non-anginal' as const,
                    angina: false,
                  },
                  {
                    id: 'worker',
                    label: '💼 Desk Worker (44y)',
                    age: 44,
                    bp: 132,
                    chol: 228,
                    maxHr: 152,
                    cp: 'atypical' as const,
                    angina: false,
                  },
                  {
                    id: 'senior',
                    label: '⚠️ Senior with Angina (64y)',
                    age: 64,
                    bp: 158,
                    chol: 280,
                    maxHr: 122,
                    cp: 'typical' as const,
                    angina: true,
                  },
                  {
                    id: 'critical',
                    label: '🚨 High-Risk Case (68y)',
                    age: 68,
                    bp: 172,
                    chol: 315,
                    maxHr: 108,
                    cp: 'asymptomatic' as const,
                    angina: true,
                  },
                ].map((persona) => (
                  <button
                    key={persona.id}
                    onClick={() => applyPersona(persona)}
                    className={`px-3 py-1 rounded-md font-mono text-[11px] transition ${
                      activePersona === persona.id
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 font-semibold shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500'
                    }`}
                  >
                    {persona.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Feature Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-heading font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Clinical Indicators & Biometrics
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Real-time feature weights
                  </span>
                </div>

                {/* Slider 1: Age */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      Patient Age
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {age < 40 ? 'Younger Adult' : age < 60 ? 'Middle-Aged' : 'Senior'}
                      </span>
                      <span className="font-mono font-bold text-teal-700 dark:text-teal-400 text-sm">
                        {age} Years
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="78"
                    value={age}
                    onChange={(e) => {
                      setActivePersona('custom');
                      setAge(Number(e.target.value));
                    }}
                    className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>25 yrs (Baseline)</span>
                    <span>50 yrs</span>
                    <span>78 yrs (Elderly)</span>
                  </div>
                </div>

                {/* Slider 2: Resting Blood Pressure */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="text-slate-800 dark:text-slate-200 font-medium">
                        Resting Blood Pressure
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono ml-2">(trestbps)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${bpZone.color} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700`}>
                        {bpZone.label}
                      </span>
                      <span className="font-mono font-bold text-teal-700 dark:text-teal-400 text-sm">
                        {bp} mm Hg
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="95"
                    max="190"
                    value={bp}
                    onChange={(e) => {
                      setActivePersona('custom');
                      setBp(Number(e.target.value));
                    }}
                    className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-center pt-0.5">
                    <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      &lt;120 Normal
                    </span>
                    <span className="p-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                      120-129 Elevated
                    </span>
                    <span className="p-0.5 rounded bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20">
                      130-139 Stage 1
                    </span>
                    <span className="p-0.5 rounded bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                      140+ Stage 2
                    </span>
                  </div>
                </div>

                {/* Slider 3: Serum Cholesterol */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="text-slate-800 dark:text-slate-200 font-medium">
                        Serum Cholesterol
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono ml-2">(chol)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${cholZone.color} bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700`}>
                        {cholZone.label}
                      </span>
                      <span className="font-mono font-bold text-teal-700 dark:text-teal-400 text-sm">
                        {cholesterol} mg/dL
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="360"
                    value={cholesterol}
                    onChange={(e) => {
                      setActivePersona('custom');
                      setCholesterol(Number(e.target.value));
                    }}
                    className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-center pt-0.5">
                    <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      &lt;200 Desirable
                    </span>
                    <span className="p-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                      200-239 Borderline
                    </span>
                    <span className="p-0.5 rounded bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                      240+ High Risk
                    </span>
                  </div>
                </div>

                {/* Slider 4: Maximum Heart Rate Achieved (Thalach) */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="text-slate-800 dark:text-slate-200 font-medium">
                        Maximum Heart Rate Achieved
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono ml-2">(thalach)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500">
                        Max Est: {targetMaxHr} bpm
                      </span>
                      <span className="font-mono font-bold text-teal-700 dark:text-teal-400 text-sm">
                        {maxHeartRate} bpm
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="205"
                    value={maxHeartRate}
                    onChange={(e) => {
                      setActivePersona('custom');
                      setMaxHeartRate(Number(e.target.value));
                    }}
                    className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>80 bpm (Low reserve)</span>
                    <span>140 bpm</span>
                    <span>205 bpm (High aerobic output)</span>
                  </div>
                </div>

                {/* Tactile Cards for Chest Pain Type */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between">
                    <span>Chest Pain Symptom Category (cp):</span>
                    <span className="text-[10px] font-mono text-slate-400">Key predictor</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'non-anginal', label: 'Non-Anginal', desc: 'Musculoskeletal' },
                      { id: 'atypical', label: 'Atypical Angina', desc: 'Mild discomfort' },
                      { id: 'typical', label: 'Typical Angina', desc: 'Classic tightness' },
                      { id: 'asymptomatic', label: 'Asymptomatic', desc: 'Silent ischemia' },
                    ].map((cpOption) => (
                      <button
                        key={cpOption.id}
                        type="button"
                        onClick={() => {
                          setActivePersona('custom');
                          setChestPain(cpOption.id as any);
                        }}
                        className={`p-2.5 rounded-lg border text-left transition ${
                          chestPain === cpOption.id
                            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 border-slate-900 dark:border-white shadow-xs'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-teal-500'
                        }`}
                      >
                        <div className="font-heading font-semibold text-xs">{cpOption.label}</div>
                        <div className="text-[10px] opacity-75 font-mono mt-0.5">{cpOption.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Exercise Induced Angina Switch */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-800 dark:text-slate-200 text-xs">
                      Exercise-Induced Angina (exang)
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Chest pain provoked by physical exertion
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActivePersona('custom');
                      setExerciseAngina(!exerciseAngina);
                    }}
                    className={`px-4 py-1.5 rounded-md text-xs font-mono font-semibold transition ${
                      exerciseAngina
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {exerciseAngina ? 'Present (+Angina)' : 'Absent (No Pain)'}
                  </button>
                </div>
              </div>

              {/* Right Column: Live Model Output & Feature Attribution HUD (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/70 flex flex-col items-center text-center shadow-xs">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    Predicted Cardiovascular Risk Index
                  </span>

                  <div className="relative w-36 h-36 flex items-center justify-center my-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        className="text-slate-200 dark:text-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={riskCat.barColor}
                        strokeWidth="8"
                        strokeDasharray={251}
                        strokeDashoffset={251 - (251 * riskPercentage) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-300"
                      />
                    </svg>

                    <div className="absolute flex flex-col items-center">
                      <span className="text-4xl font-heading font-black text-slate-900 dark:text-white">
                        {riskPercentage}%
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">
                        Probability
                      </span>
                    </div>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${riskCat.badge} mt-1`}>
                    {riskCat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">
                    Status: {riskCat.level}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                    {riskCat.recommendation}
                  </p>
                </div>

                {/* Feature Attribution (Explainable AI / SHAP-style Factors) */}
                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111620] space-y-3">
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-heading font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[11px]">
                      Model Feature Attribution (Weights)
                    </span>
                    <span className="font-mono text-[10px] text-teal-700 dark:text-teal-400">
                      Logistic Heuristic
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    {factors.map((f, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-600 dark:text-slate-400">{f.name}</span>
                          <span
                            className={
                              f.type === 'protective'
                                ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                                : f.type === 'risk' && f.impact > 10
                                ? 'text-rose-600 dark:text-rose-400 font-bold'
                                : 'text-slate-600 dark:text-slate-300'
                            }
                          >
                            {f.type === 'protective' ? `-${f.impact}% (Protective)` : `+${f.impact}%`}
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${
                              f.type === 'protective'
                                ? 'bg-emerald-500'
                                : f.impact > 15
                                ? 'bg-rose-500'
                                : f.impact > 5
                                ? 'bg-amber-500'
                                : 'bg-slate-400 dark:bg-slate-600'
                            }`}
                            style={{ width: `${Math.min(100, f.impact * 2.5)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-500 text-center">
                    Higher Max HR creates protective reserve • Symptoms & BP drive risk
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
