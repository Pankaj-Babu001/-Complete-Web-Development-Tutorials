import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!show) {
            return;
        }

        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.log("Hi");
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [show]);

    const toggleClock = () => {
        setShow(prevShow => !prevShow);
    };

    return (
        // Outer container to center everything
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
            padding: '30px',
            backgroundColor: '#f0f0f0', // Light background
            minHeight: '100vh' // Ensures component takes up the full viewport height
        }}>

            {/* Button Section */}
            <button
                onClick={toggleClock}
                style={{
                    padding: '10px 25px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: show ? '#dc3545' : '#28a745', // Red for hide, Green for show
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s'
                }}
            >
                {show ? "Hide Clock" : "Show Clock"}
            </button>

            {/* Clock Display Section */}
            {show && (
                <div style={{
                    marginTop: '40px',
                    padding: '40px 60px',
                    border: '4px solid #1a1a1a', // Dark border
                    borderRadius: '15px',
                    backgroundColor: '#343a40', // Dark background for the clock itself
                    color: '#00ff7f', // Neon green text for digital effect
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                }}>
                    <h1 style={{
                        fontSize: '4em', // Large size
                        margin: 0,
                        letterSpacing: '5px', // Spacing between characters
                        fontFamily: 'monospace, sans-serif', // Digital font look
                        textShadow: '0 0 10px #00ff7f' // Subtle neon glow effect
                    }}>
                        {time}
                    </h1>
                </div>
            )}
        </div>
    );
}

export default Clock;