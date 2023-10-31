import React, { useState } from 'react';
import users from './users.json';  // Adjust the path as necessary

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // To display error messages

  const handleLoginClick = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      onLogin(username);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to Hong Kong Futurist's Application Portal</h2>
      
      {error && <div className="error">{error}</div>}
      
      <label>
        Enter your name:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
        />
      </label>

      <label>
        Enter your password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
      
      <button onClick={handleLoginClick}>Start Interview</button>
    </div>
  );
}

export default Login;
