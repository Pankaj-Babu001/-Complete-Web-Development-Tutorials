import React from 'react';

// Creating a small UI using only React.createElement()
// No JSX is used in this component

function PureReactUI() {
  return React.createElement(
    'div',
    { 
      style: { 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '40px 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      } 
    },
    React.createElement(
      'header',
      { style: { marginBottom: '30px' } },
      React.createElement(
        'h1',
        { 
          style: { 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            color: '#1a202c'
          } 
        },
        'Welcome to Pure React'
      ),
      React.createElement(
        'p',
        { 
          style: { 
            fontSize: '16px', 
            color: '#718096',
            lineHeight: '1.6'
          } 
        },
        'This entire UI is built using React.createElement() without any JSX syntax.'
      )
    ),
    React.createElement(
      'main',
      { style: { marginBottom: '30px' } },
      React.createElement(
        'div',
        { 
          style: { 
            backgroundColor: '#edf2f7', 
            padding: '20px', 
            borderRadius: '8px',
            marginBottom: '20px'
          } 
        },
        React.createElement(
          'h2',
          { 
            style: { 
              fontSize: '20px', 
              fontWeight: '600', 
              marginBottom: '10px',
              color: '#2d3748'
            } 
          },
          'Card Component'
        ),
        React.createElement(
          'p',
          { 
            style: { 
              fontSize: '14px', 
              color: '#4a5568',
              lineHeight: '1.5'
            } 
          },
          'Every element here, from the divs to the paragraphs, is created using React.createElement(). This is what JSX compiles down to!'
        )
      ),
      React.createElement(
        'ul',
        { 
          style: { 
            listStyle: 'none', 
            padding: '0',
            margin: '0'
          } 
        },
        React.createElement(
          'li',
          { 
            style: { 
              padding: '12px', 
              backgroundColor: '#f7fafc', 
              marginBottom: '8px',
              borderRadius: '6px',
              borderLeft: '4px solid #4299e1'
            } 
          },
          '✓ No JSX syntax used'
        ),
        React.createElement(
          'li',
          { 
            style: { 
              padding: '12px', 
              backgroundColor: '#f7fafc', 
              marginBottom: '8px',
              borderRadius: '6px',
              borderLeft: '4px solid #48bb78'
            } 
          },
          '✓ Pure React.createElement() calls'
        ),
        React.createElement(
          'li',
          { 
            style: { 
              padding: '12px', 
              backgroundColor: '#f7fafc',
              borderRadius: '6px',
              borderLeft: '4px solid #ed8936'
            } 
          },
          '✓ Same result as JSX components'
        )
      )
    ),
    React.createElement(
      'footer',
      { 
        style: { 
          padding: '20px', 
          backgroundColor: '#1a202c', 
          color: 'white',
          borderRadius: '8px',
          textAlign: 'center'
        } 
      },
      React.createElement(
        'p',
        { style: { margin: '0', fontSize: '14px' } },
        'Built with React.createElement() | No JSX Required'
      )
    )
  );
}

export default PureReactUI;