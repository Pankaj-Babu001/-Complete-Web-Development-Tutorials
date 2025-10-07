function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(`Current count: ${count}`);
  };
}

// Example
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
