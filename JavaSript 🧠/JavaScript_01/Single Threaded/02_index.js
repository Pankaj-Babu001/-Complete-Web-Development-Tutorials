class EventLoopVisualizer {
    constructor() {
        this.callStack = [];
        this.microtaskQueue = [];
        this.taskQueue = [];
    }

    addToCallStack(task) {
        this.callStack.push(task);
        console.log(`📚 Added to Call Stack: ${task}`);
    }

    addToMicrotaskQueue(task) {
        this.microtaskQueue.push(task);
        console.log(`🟢 Added to Microtask Queue: ${task}`);
    }

    addToTaskQueue(task) {
        this.taskQueue.push(task);
        console.log(`🟡 Added to Task Queue: ${task}`);
    }

    processEventLoop() {
        console.log("\n🔄 EVENT LOOP STARTING...");

        // Process call stack first
        while (this.callStack.length > 0) {
            const task = this.callStack.shift();
            console.log(`📚 Processing from Call Stack: ${task}`);
        }

        // Process microtasks (higher priority)
        while (this.microtaskQueue.length > 0) {
            const task = this.microtaskQueue.shift();
            console.log(`🟢 Processing from Microtask Queue: ${task}`);
        }

        // Process regular tasks
        while (this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            console.log(`🟡 Processing from Task Queue: ${task}`);
        }

        console.log("✅ EVENT LOOP COMPLETE\n");
    }
}

// Usage example
const visualizer = new EventLoopVisualizer();

visualizer.addToCallStack("main()");
visualizer.addToCallStack("console.log()");

// Simulate async operations
visualizer.addToTaskQueue("setTimeout callback");
visualizer.addToMicrotaskQueue("Promise.then()");
visualizer.addToTaskQueue("DOM event");

visualizer.processEventLoop();