import React, { useState } from 'react';
import './register.css'; // Assuming you put the CSS file in the same directory

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here (API call or form validation)
        console.log({ name, email, mobile, password, repassword });
    };

    const togglePasswordVisibility = (id) => {
        const input = document.getElementById(id);
        input.type = input.type === 'password' ? 'text' : 'password';
    };

    return (
        <div className="container">
            <div className="header">
                <div className="logo">Clean</div>
            </div>

            <div className="form-container">
                <h1>Create New Account</h1>
                <p>Set up your username and password. You can always change it later.</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Smith Johnson"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="smithjohnson@example.com"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="(219) 555-0114"
                            required
                        />
                    </div>

                    <div className="input-group password-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => togglePasswordVisibility('password')}
                        >
                            &#128065;
                        </span>
                    </div>

                    <div className="input-group password-group">
                        <label htmlFor="repassword">Re-Enter Password</label>
                        <input
                            type="password"
                            id="repassword"
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => togglePasswordVisibility('repassword')}
                        >
                            &#128065;
                        </span>
                    </div>

                    <button type="submit" className="signup-btn">
                        Signup
                    </button>
                </form>

                <p className="login-link">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
