import { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    // Fix 1: Added 'setCount' to the destructuring array
    const [count, setCount] = useState(10);

    useEffect(() => {
        async function GithubProfile() {
            try {
                // Fix 2: Changed $(count) to ${count} for correct template literal syntax
                const response = await fetch(`https://api.github.com/users?per_page=${count}`);
                const data = await response.json();
                setUsers(data);
                console.log("Data fetched for count:", count);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        // Only fetch if count is a valid number greater than 0
        if (count > 0) {
            GithubProfile();
        }

    }, [count]);

    return (
        <>
            <h1>Github Users</h1>

            <input
                type="number"
                value={count}
                // Fix 3: Handle empty strings to prevent errors when clearing the input
                onChange={(e) => setCount(e.target.value)}
                placeholder="Number of users..."
            />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
                {users.map((user) => (
                    <img
                        src={user.avatar_url}
                        height="150px"
                        width="170px"
                        key={user.login}
                        alt={user.login}
                        style={{objectFit: "cover", borderRadius: "10px"}} // Added a little styling
                    />
                ))}
            </div>
        </>
    );
}

export default App;