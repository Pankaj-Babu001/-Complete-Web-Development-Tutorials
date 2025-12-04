import { useState } from 'react';


// userState Hook: useState is a Hook that allows you to have state variables in functional components.
// setCount is the function that updates the state variable count.

function App() {

    
    const [count, setCount] = useState(0);

    function increaseNumber() {
        setCount(count + 1);
        console.log(count + 1);
    }

    return (
      <>
      <p> Counter: {count}</p>
      <button onClick={increaseNumber}> Increment: {count} </button>
      </>
    )
}

export default App;