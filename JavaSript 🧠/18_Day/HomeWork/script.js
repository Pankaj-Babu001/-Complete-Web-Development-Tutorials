// JavaScript Memory Concepts - Homework Solutions

// Utility function to capture console output
function captureConsole(func) {
    const originalLog = console.log;
    let output = '';
    
    console.log = (...args) => {
        output += args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' ') + '\n';
    };
    
    try {
        func();
    } catch (error) {
        output += `Error: ${error.message}\n`;
    }
    
    console.log = originalLog;
    return output;
}

// Problem 1: Value vs Reference with Arrays & Objects
function demonstrateValueVsReference() {
    console.log("=== PRIMITIVES (VALUE) ===");
    let a = 10;
    let b = a; // Copy by VALUE
    
    console.log("Before modification:");
    console.log("a =", a, "| b =", b);
    
    b = 20; // Only b changes
    console.log("After b = 20:");
    console.log("a =", a, "| b =", b, "← a unchanged!");
    
    console.log("\n=== ARRAYS (REFERENCE) ===");
    let arr1 = [1, 2, 3];
    let arr2 = arr1; // Copy by REFERENCE
    
    console.log("Before modification:");
    console.log("arr1 =", arr1);
    console.log("arr2 =", arr2);
    console.log("Same reference?", arr1 === arr2);
    
    arr2.push(4); // Modifies both!
    console.log("After arr2.push(4):");
    console.log("arr1 =", arr1, "← Modified too!");
    console.log("arr2 =", arr2);
    
    console.log("\n=== OBJECTS (REFERENCE) ===");
    let obj1 = { name: "John", age: 25 };
    let obj2 = obj1; // Copy by REFERENCE
    
    console.log("Before modification:");
    console.log("obj1 =", obj1);
    console.log("obj2 =", obj2);
    
    obj2.age = 30; // Modifies both!
    obj2.city = "New York"; // Adds to both!
    console.log("After modifying obj2:");
    console.log("obj1 =", obj1, "← Modified too!");
    console.log("obj2 =", obj2);
    
    console.log("\n=== CREATING TRUE COPIES ===");
    let arr3 = [1, 2, 3];
    let arr4 = [...arr3]; // Spread operator creates new array
    let obj3 = { name: "Jane", age: 28 };
    let obj4 = { ...obj3 }; // Spread operator creates new object
    
    arr4.push(4);
    obj4.age = 35;
    
    console.log("arr3 =", arr3, "| arr4 =", arr4, "← Different!");
    console.log("obj3 =", obj3);
    console.log("obj4 =", obj4, "← Different!");
}

function runProblem1() {
    const output = captureConsole(demonstrateValueVsReference);
    document.getElementById('result1').textContent = output;
    document.getElementById('output1').style.display = 'block';
    
    // Scroll to output
    document.getElementById('output1').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Problem 2: Function Call Stack Tracing
function traceCallStack() {
    console.log("=== FUNCTION CALL STACK TRACE ===");
    
    function functionA() {
        console.log("→ Entering functionA");
        functionB();
        console.log("← Exiting functionA");
    }
    
    function functionB() {
        console.log("  → Entering functionB");
        functionC();
        console.log("  ← Exiting functionB");
    }
    
    function functionC() {
        console.log("    → Entering functionC");
        console.log("    ◆ Inside functionC - deepest level");
        console.log("    ← Exiting functionC");
    }
    
    console.log("🚀 Starting execution...");
    functionA();
    console.log("✅ Execution complete!");
    
    console.log("\n=== CALL STACK VISUALIZATION ===");
    console.log("Stack grows like this:");
    console.log("┌─────────────────┐");
    console.log("│   functionC     │ ← 3rd (deepest)");
    console.log("├─────────────────┤");
    console.log("│   functionB     │ ← 2nd");
    console.log("├─────────────────┤");
    console.log("│   functionA     │ ← 1st");
    console.log("├─────────────────┤");
    console.log("│ traceCallStack  │ ← base");
    console.log("└─────────────────┘");
    console.log("Then unwinds in reverse order (LIFO)");
    
    console.log("\n=== EXECUTION ORDER ===");
    console.log("1. traceCallStack() starts");
    console.log("2. functionA() called → enters");
    console.log("3. functionB() called → enters");
    console.log("4. functionC() called → enters & exits");
    console.log("5. functionB() continues → exits");
    console.log("6. functionA() continues → exits");
    console.log("7. traceCallStack() continues → ends");
}

function runProblem2() {
    const output = captureConsole(traceCallStack);
    document.getElementById('result2').textContent = output;
    document.getElementById('output2').style.display = 'block';
    
    // Scroll to output
    document.getElementById('output2').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Problem 3: Stack Overflow Example
function demonstrateStackOverflow() {
    console.log("=== STACK OVERFLOW EXAMPLE ===");
    
    let callCount = 0;
    const maxSafeLimit = 1000; // Safety limit for demo
    
    function infiniteRecursion(depth = 1) {
        callCount++;
        
        // Safety check to prevent browser crash in demo
        if (callCount >= maxSafeLimit) {
            console.log(`🛑 Stopped at ${callCount} calls to prevent browser crash`);
            console.log("In a real scenario, this would continue until:");
            console.log("💥 RangeError: Maximum call stack size exceeded");
            console.log("\nTypical browser limits:");
            console.log("• Chrome: ~10,000-15,000 calls");
            console.log("• Firefox: ~50,000+ calls");
            console.log("• Safari: ~10,000-20,000 calls");
            return;
        }
        
        // Show progress for first few calls and every 100th call
        if (depth <= 5 || depth % 100 === 0) {
            console.log(`📞 Call #${callCount} - Depth: ${depth}`);
        }
        
        // This creates infinite recursion - NO BASE CASE!
        infiniteRecursion(depth + 1);
        
        // This line never executes due to stack overflow
        console.log(`This will never print for call ${callCount}`);
    }
    
    console.log("Starting infinite recursion...");
    console.log("Each call adds a new frame to the stack without removing previous ones");
    console.log("Memory usage grows with each recursive call until limit reached\n");
    
    try {
        infiniteRecursion();
    } catch (error) {
        console.log("🚨 Caught error:", error.message);
        console.log("📊 Total calls before overflow:", callCount);
    }
    
    console.log("\n=== WHY STACK OVERFLOW OCCURS ===");
    console.log("• Each function call creates a new stack frame");
    console.log("• Stack frames contain local variables, parameters, return addresses");
    console.log("• Infinite recursion = infinite stack frames");
    console.log("• Stack has limited memory → eventually overflows");
    
    console.log("\n=== HOW TO PREVENT STACK OVERFLOW ===");
    console.log("✅ Always include a base case to stop recursion");
    console.log("✅ Ensure the base case is reachable");
    console.log("✅ Limit recursion depth for large inputs");
    
    console.log("\n🔧 CORRECTED RECURSIVE FUNCTION:");
    
    function properRecursion(n) {
        // BASE CASE - stops the recursion
        if (n <= 0) {
            console.log("Base case reached!");
            return;
        }
        
        console.log("Counting down:", n);
        properRecursion(n - 1); // Moves toward base case
    }
    
    console.log("Running proper recursion with base case:");
    properRecursion(3);
}

function runProblem3() {
    const output = captureConsole(demonstrateStackOverflow);
    document.getElementById('result3').textContent = output;
    document.getElementById('output3').style.display = 'block';
    
    // Scroll to output
    document.getElementById('output3').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Problem 4: Memory Behavior Comparison
function compareMemoryBehavior() {
    console.log("=== MEMORY BEHAVIOR COMPARISON ===");
    
    console.log("🔢 PRIMITIVE REASSIGNMENT:");
    let primitiveVar = 42;
    console.log("Original value:", primitiveVar);
    console.log("Memory location: [Stack] - stores actual value");
    console.log("Variable 'primitiveVar' points directly to value 42");
    
    // Reassigning creates a new value in memory
    primitiveVar = 100;
    console.log("\nAfter reassignment (primitiveVar = 100):");
    console.log("New value:", primitiveVar);
    console.log("✅ Old value (42) is eligible for garbage collection");
    console.log("✅ New value (100) stored in same variable slot");
    console.log("✅ No other variables affected");
    
    console.log("\n🏠 OBJECT MODIFICATION:");
    let objectVar = { count: 42, name: "Test" };
    console.log("Original object:", objectVar);
    console.log("Memory: [Heap] - variable stores reference/pointer to object");
    console.log("Variable 'objectVar' points to memory address containing object");
    
    // Store reference before modification
    let originalReference = objectVar;
    
    // Modifying object changes the existing object in memory
    objectVar.count = 100;
    objectVar.newProperty = "Added";
    console.log("\nAfter modification:");
    console.log("Modified object:", objectVar);
    console.log("Original reference:", originalReference);
    console.log("✅ Same object in memory, just modified");
    console.log("✅ Reference remains the same");
    console.log("✅ All variables pointing to this object see changes");
    
    console.log("\n📊 DETAILED MEMORY TRACKING DEMO:");
    
    // Demonstrate reference sharing
    let obj1 = { value: 1, type: "original" };
    let obj2 = obj1; // Same reference - SHALLOW COPY
    let obj3 = { ...obj1 }; // Different reference - DEEP COPY (for shallow objects)
    
    console.log("\nInitial state:");
    console.log("obj1:", obj1);
    console.log("obj2:", obj2);
    console.log("obj3:", obj3);
    console.log("obj1 === obj2 (same reference):", obj1 === obj2);
    console.log("obj1 === obj3 (different reference):", obj1 === obj3);
    
    // Modify through obj1
    console.log("\n--- Modifying obj1.value = 999 ---");
    obj1.value = 999;
    obj1.modified = true;
    
    console.log("obj1:", obj1, "← Modified");
    console.log("obj2:", obj2, "← Also modified (same reference!)");
    console.log("obj3:", obj3, "← Unchanged (different reference)");
    console.log("obj1 === obj2 still:", obj1 === obj2);
    
    // Reassign object reference
    console.log("\n--- Reassigning obj1 = { value: 555 } ---");
    obj1 = { value: 555, type: "new object" };
    
    console.log("obj1:", obj1, "← Completely new object");
    console.log("obj2:", obj2, "← Still points to old object");
    console.log("obj3:", obj3, "← Still unchanged");
    console.log("obj1 === obj2 now:", obj1 === obj2, "← Different references!");
    
    console.log("\n🧠 MEMORY LAYOUT VISUALIZATION:");
    console.log("┌─────────────────────────────────────────┐");
    console.log("│                STACK                     │");
    console.log("├─────────────────────────────────────────┤");
    console.log("│ primitiveVar: 100 (direct value)       │");
    console.log("│ obj1: 0x3001 (pointer to heap)         │");
    console.log("│ obj2: 0x2001 (pointer to heap)         │");
    console.log("│ obj3: 0x4001 (pointer to heap)         │");
    console.log("└─────────────────────────────────────────┘");
    console.log("                    │");
    console.log("┌─────────────────────────────────────────┐");
    console.log("│                HEAP                      │");
    console.log("├─────────────────────────────────────────┤");
    console.log("│ 0x2001: {value: 999, type: 'original', │");
    console.log("│         modified: true}                  │");
    console.log("│ 0x3001: {value: 555, type: 'new object'}│");
    console.log("│ 0x4001: {value: 1, type: 'original'}   │");
    console.log("└─────────────────────────────────────────┘");
    
    console.log("\n📋 KEY DIFFERENCES SUMMARY:");
    console.log("┌─────────────────────────────────────────┐");
    console.log("│ PRIMITIVES (number, string, boolean)   │");
    console.log("│ • Stored directly in stack             │");
    console.log("│ • Assignment copies the VALUE          │");
    console.log("│ • Reassignment creates new value       │");
    console.log("│ • Old value gets garbage collected     │");
    console.log("│ • No shared references                 │");
    console.log("├─────────────────────────────────────────┤");
    console.log("│ OBJECTS & ARRAYS (reference types)     │");
    console.log("│ • Stored in heap                        │");
    console.log("│ • Variable holds REFERENCE (pointer)   │");
    console.log("│ • Assignment copies the REFERENCE      │");
    console.log("│ • Modification changes existing object  │");
    console.log("│ • Reassignment creates new reference   │");
    console.log("│ • Multiple variables can share refs    │");
    console.log("└─────────────────────────────────────────┘");
    
    console.log("\n💡 PRACTICAL IMPLICATIONS:");
    console.log("• Passing primitives to functions = safe (copies)");
    console.log("• Passing objects to functions = potential side effects");
    console.log("• Use spread operator (...) or Object.assign() for shallow copies");
    console.log("• Use JSON.parse(JSON.stringify()) for deep copies (limited)");
    console.log("• Consider using libraries like Lodash for complex deep cloning");
}

function runProblem4() {
    const output = captureConsole(compareMemoryBehavior);
    document.getElementById('result4').textContent = output;
    document.getElementById('output4').style.display = 'block';
    
    // Scroll to output
    document.getElementById('output4').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Additional utility functions for enhanced user experience

// Function to toggle all outputs
function toggleAllOutputs() {
    const outputs = document.querySelectorAll('.output');
    const allVisible = Array.from(outputs).every(output => 
        output.style.display !== 'none'
    );
    
    outputs.forEach(output => {
        output.style.display = allVisible ? 'none' : 'block';
    });
}

// Function to run all problems sequentially
function runAllProblems() {
    const problems = [runProblem1, runProblem2, runProblem3, runProblem4];
    let index = 0;
    
    function runNext() {
        if (index < problems.length) {
            problems[index]();
            index++;
            setTimeout(runNext, 500); // Small delay between executions
        }
    }
    
    runNext();
}

// Function to clear all outputs
function clearAllOutputs() {
    const outputs = document.querySelectorAll('.output');
    outputs.forEach(output => {
        output.style.display = 'none';
        const resultElement = output.querySelector('pre[id^="result"]');
        if (resultElement) {
            resultElement.textContent = '';
        }
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + 1, 2, 3, 4 to run respective problems
    if ((event.ctrlKey || event.metaKey) && event.key >= '1' && event.key <= '4') {
        event.preventDefault();
        const problemNumber = parseInt(event.key);
        const runFunctions = [runProblem1, runProblem2, runProblem3, runProblem4];
        runFunctions[problemNumber - 1]();
    }
    
    // Ctrl/Cmd + A to run all problems
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a') {
        event.preventDefault();
        runAllProblems();
    }
    
    // Ctrl/Cmd + C to clear all outputs
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
        event.preventDefault();
        clearAllOutputs();
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Memory Concepts - Homework Solutions Loaded');
    console.log('Keyboard shortcuts:');
    console.log('- Ctrl/Cmd + 1-4: Run respective problems');
    console.log('- Ctrl/Cmd + A: Run all problems');
    console.log('- Ctrl/Cmd + C: Clear all outputs');
    
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});