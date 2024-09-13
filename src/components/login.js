import React, { useState } from 'react';
import './login.css'; // Ensure the CSS file is in the same folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log('Logging in with:', { mobile, password });
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src="logo.png" alt="Clean Logo" /> {/* Replace with actual logo source */}
            </div>
            <h1>Welcome Back</h1>
            <p>Log in to your account using mobile number or social networks</p>

            <button className="login-btn apple">
                <FontAwesomeIcon icon={faApple} /> Login with Apple
            </button>
            <button className="login-btn google">
                <FontAwesomeIcon icon={faGoogle} /> Login with Google
            </button>

            <div className="divider">
                <span>Or continue with social account</span>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="input-field"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <div className="password-field">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="toggle-password" onClick={togglePasswordVisibility}>👁️</span>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
                <button type="submit" className="login-submit">Login</button>
            </form>

            <p className="signup-text">Didn't have an account? <a href="#">Signup</a></p>
        </div>
    );
};

export default Login;
