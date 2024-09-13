import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import './styles.css';

function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to the Home Service App</h1>
                <p>Try going to <a href="/login">Login</a> or <a href="/register">Register</a>.</p>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

