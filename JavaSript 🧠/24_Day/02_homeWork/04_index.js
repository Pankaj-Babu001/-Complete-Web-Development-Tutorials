function showMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// Example
showMessage("This message appears after 2 seconds ⏳", 2000);
