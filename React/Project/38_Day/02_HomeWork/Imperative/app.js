import React, { useState } from 'react';

// Interactive counter component without JSX
// Demonstrating state management using React.createElement()

function InteractiveCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);
  const handleStepChange = (e) => setStep(Number(e.target.value));

  return React.createElement(
    'div',
    {
      style: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center'
      }
    },
    React.createElement(
      'h1',
      {
        style: {
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#1a202c'
        }
      },
      'Interactive Counter'
    ),
    React.createElement(
      'p',
      {
        style: {
          fontSize: '14px',
          color: '#718096',
          marginBottom: '30px'
        }
      },
      'Built with React.createElement() and useState hook'
    ),
    React.createElement(
      'div',
      {
        style: {
          backgroundColor: '#edf2f7',
          padding: '40px 30px',
          borderRadius: '12px',
          marginBottom: '30px'
        }
      },
      React.createElement(
        'div',
        {
          style: {
            fontSize: '72px',
            fontWeight: 'bold',
            color: count >= 0 ? '#2d3748' : '#e53e3e',
            marginBottom: '20px',
            transition: 'all 0.3s ease'
          }
        },
        count
      ),
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '20px'
          }
        },
        React.createElement(
          'button',
          {
            onClick: decrement,
            style: {
              padding: '12px 24px',
              fontSize: '18px',
              fontWeight: '600',
              backgroundColor: '#e53e3e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.target.style.backgroundColor = '#c53030',
            onMouseLeave: (e) => e.target.style.backgroundColor = '#e53e3e'
          },
          '− Decrement'
        ),
        React.createElement(
          'button',
          {
            onClick: increment,
            style: {
              padding: '12px 24px',
              fontSize: '18px',
              fontWeight: '600',
              backgroundColor: '#48bb78',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            },
            onMouseEnter: (e) => e.target.style.backgroundColor = '#38a169',
            onMouseLeave: (e) => e.target.style.backgroundColor = '#48bb78'
          },
          '+ Increment'
        )
      ),
      React.createElement(
        'button',
        {
          onClick: reset,
          style: {
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            backgroundColor: '#718096',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          },
          onMouseEnter: (e) => e.target.style.backgroundColor = '#4a5568',
          onMouseLeave: (e) => e.target.style.backgroundColor = '#718096'
        },
        'Reset'
      )
    ),
    React.createElement(
      'div',
      {
        style: {
          backgroundColor: '#f7fafc',
          padding: '20px',
          borderRadius: '8px'
        }
      },
      React.createElement(
        'label',
        {
          style: {
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '10px'
          }
        },
        'Step Size: ',
        step
      ),
      React.createElement('input', {
        type: 'range',
        min: '1',
        max: '10',
        value: step,
        onChange: handleStepChange,
        style: {
          width: '100%',
          cursor: 'pointer'
        }
      })
    )
  );
}

export default InteractiveCounter;