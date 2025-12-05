import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VennDiagram = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [executing, setExecuting] = useState(false);
    const [logs, setLogs] = useState([]);

    const sections = {
        sync: {
            title: 'Synchronous Code',
            color: 'rgba(59, 130, 246, 0.3)',
            stroke: '#3b82f6',
            description: 'Executes immediately on the call stack',
            code: `console.log('Sync 1');
console.log('Sync 2');
for(let i = 0; i < 3; i++) {
  console.log('Loop:', i);
}`,
            examples: ['Variable declarations', 'Loops', 'Direct function calls']
        },
        async: {
            title: 'Asynchronous Code',
            color: 'rgba(239, 68, 68, 0.3)',
            stroke: '#ef4444',
            description: 'Goes to task queue, executes later',
            code: `setTimeout(() => {
  console.log('Async callback');
}, 0);

fetch('/api')
  .then(res => console.log(res));`,
            examples: ['setTimeout', 'Promises', 'fetch', 'Event listeners']
        },
        overlap: {
            title: 'Event Loop Bridge',
            color: 'rgba(168, 85, 247, 0.4)',
            stroke: '#a855f7',
            description: 'Manages execution order between sync & async',
            code: `// All run on single thread
console.log('1: Sync');

setTimeout(() => {
  console.log('3: Async');
}, 0);

console.log('2: Sync');`,
            examples: ['Call Stack', 'Task Queue', 'Microtask Queue']
        }
    };

    const runDemo = async () => {
        setExecuting(true);
        setLogs([]);
        const newLogs = [];

        // Sync execution
        newLogs.push({ text: '→ Start: Call Stack', color: 'blue', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Execute: console.log("First")', color: 'blue', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Register: setTimeout callback', color: 'red', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Execute: console.log("Third")', color: 'blue', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Call Stack Empty', color: 'purple', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Event Loop: Check Task Queue', color: 'purple', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Execute: setTimeout callback', color: 'red', time: 0 });
        setLogs([...newLogs]);
        await delay(800);

        newLogs.push({ text: '→ Execute: console.log("Second")', color: 'red', time: 0 });
        setLogs([...newLogs]);
        await delay(500);

        newLogs.push({ text: '✓ Done: All on ONE thread', color: 'green', time: 0 });
        setLogs([...newLogs]);

        setExecuting(false);
    };

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100">
            <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
                JavaScript Single-Threaded Execution
            </h1>
            <p className="text-center text-slate-600 mb-8">
                One thread, one call stack, but handles both sync & async code
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Venn Diagram */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-slate-700">Execution Model</h2>
                    <svg viewBox="0 0 400 300" className="w-full">
                        {/* Synchronous Circle */}
                        <circle
                            cx="150"
                            cy="150"
                            r="100"
                            fill={sections.sync.color}
                            stroke={sections.sync.stroke}
                            strokeWidth="3"
                            className="cursor-pointer transition-all hover:opacity-80"
                            onMouseEnter={() => setActiveSection('sync')}
                            onMouseLeave={() => setActiveSection(null)}
                        />

                        {/* Asynchronous Circle */}
                        <circle
                            cx="250"
                            cy="150"
                            r="100"
                            fill={sections.async.color}
                            stroke={sections.async.stroke}
                            strokeWidth="3"
                            className="cursor-pointer transition-all hover:opacity-80"
                            onMouseEnter={() => setActiveSection('async')}
                            onMouseLeave={() => setActiveSection(null)}
                        />

                        {/* Overlap region highlight */}
                        <ellipse
                            cx="200"
                            cy="150"
                            rx="50"
                            ry="100"
                            fill={sections.overlap.color}
                            className="cursor-pointer transition-all hover:opacity-90"
                            onMouseEnter={() => setActiveSection('overlap')}
                            onMouseLeave={() => setActiveSection(null)}
                        />

                        {/* Labels */}
                        <text x="120" y="100" fill="#1e40af" fontWeight="bold" fontSize="16">
                            Sync
                        </text>
                        <text x="120" y="120" fill="#1e40af" fontSize="12">
                            Call Stack
                        </text>

                        <text x="240" y="100" fill="#dc2626" fontWeight="bold" fontSize="16">
                            Async
                        </text>
                        <text x="230" y="120" fill="#dc2626" fontSize="12">
                            Task Queue
                        </text>

                        <text x="165" y="155" fill="#7c3aed" fontWeight="bold" fontSize="14">
                            Event
                        </text>
                        <text x="172" y="170" fill="#7c3aed" fontSize="14">
                            Loop
                        </text>

                        {/* Single Thread Arrow */}
                        <path
                            d="M 200 260 L 200 280"
                            stroke="#059669"
                            strokeWidth="4"
                            markerEnd="url(#arrowhead)"
                        />
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#059669" />
                            </marker>
                        </defs>
                        <text x="100" y="295" fill="#059669" fontWeight="bold" fontSize="14">
                            ONE THREAD PROCESSES ALL
                        </text>
                    </svg>
                </div>

                {/* Info Panel */}
                <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-slate-700">
                            {activeSection ? sections[activeSection].title : 'Hover over sections'}
                        </h2>

                        {activeSection ? (
                            <>
                                <p className="text-slate-600 mb-4">
                                    {sections[activeSection].description}
                                </p>

                                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                    {sections[activeSection].code}
                  </pre>
                                </div>

                                <div className="space-y-2">
                                    <p className="font-semibold text-slate-700">Examples:</p>
                                    {sections[activeSection].examples.map((ex, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full bg-${activeSection === 'sync' ? 'blue' : activeSection === 'async' ? 'red' : 'purple'}-500`}></div>
                                            <span className="text-slate-600">{ex}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className="text-slate-500 italic">
                                Hover over the Venn diagram sections to see details
                            </p>
                        )}
                    </div>

                    {/* Demo Button */}
                    <button
                        onClick={runDemo}
                        disabled={executing}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Play size={20} />
                        {executing ? 'Running Demo...' : 'Run Execution Demo'}
                    </button>
                </div>
            </div>

            {/* Execution Log */}
            {logs.length > 0 && (
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-slate-700">Execution Timeline</h2>
                    <div className="bg-slate-900 rounded-lg p-4 max-h-64 overflow-y-auto">
                        {logs.map((log, i) => (
                            <div
                                key={i}
                                className={`font-mono text-sm mb-1 text-${log.color === 'blue' ? 'blue' : log.color === 'red' ? 'red' : log.color === 'purple' ? 'purple' : 'green'}-400`}
                            >
                                {log.text}
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 bg-slate-100 rounded-lg p-4">
                        <p className="font-semibold text-slate-700 mb-2">Code Being Executed:</p>
                        <pre className="text-sm bg-slate-900 text-green-400 p-3 rounded">
{`console.log('First');     // Sync - Call Stack

setTimeout(() => {
  console.log('Second');   // Async - Task Queue
}, 0);

console.log('Third');      // Sync - Call Stack

// Output: First, Third, Second`}
            </pre>
                    </div>
                </div>
            )}

            {/* Key Takeaway */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-2">🔑 Key Takeaway</h3>
                <p className="text-green-700">
                    JavaScript runs on <strong>ONE thread</strong>. The call stack processes synchronous code immediately.
                    Asynchronous callbacks wait in the task queue. The <strong>event loop</strong> moves tasks from the
                    queue to the call stack only when the stack is empty. This single-threaded design prevents race
                    conditions but means blocking code freezes everything!
                </p>
            </div>
        </div>
    );
};

export default VennDiagram;