let imperativeCount = 0;
    
    function updateImperativeDisplay() {
      const element = document.getElementById('imperative-counter');
      // Manually tell the browser exactly what to do
      element.textContent = imperativeCount;
      
      // Manually manage all style changes
      if (imperativeCount < 0) {
        element.style.color = '#e53e3e';
      } else {
        element.style.color = '#667eea';
      }
    }
    
    function imperativeIncrement() {
      imperativeCount++;
      updateImperativeDisplay(); // Must remember to update
    }
    
    function imperativeDecrement() {
      imperativeCount--;
      updateImperativeDisplay(); // Must remember to update
    }
    
    function imperativeReset() {
      imperativeCount = 0;
      updateImperativeDisplay(); // Must remember to update
    }
    
    // DECLARATIVE APPROACH (simulated with vanilla JS)
    let declarativeCount = 0;
    
    // This simulates React's declarative style
    function renderDeclarative() {
      const element = document.getElementById('declarative-counter');
      
      // We describe WHAT we want, not HOW to get there
      const color = declarativeCount < 0 ? '#e53e3e' : '#667eea';
      
      // Render function contains the complete description
      element.textContent = declarativeCount;
      element.style.color = color;
      
      // In React, this would happen automatically
      // whenever state changes via setCount()
    }
    
    function declarativeIncrement() {
      declarativeCount++;
      renderDeclarative(); // React does this automatically
    }
    
    function declarativeDecrement() {
      declarativeCount--;
      renderDeclarative(); // React does this automatically
    }
    
    function declarativeReset() {
      declarativeCount = 0;
      renderDeclarative(); // React does this automatically
    }