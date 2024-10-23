import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './LoginForm.css';


const LoginForm = ({ onLogin }) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
   
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate('/');
    //     }

    // }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!password) {
            setError('Password is required');
            return;
        }

       
        onLogin(); 
        navigate('/'); 
    };

    return (
        <div className='form-main-container'>
            <form onSubmit={handleSubmit} className="form-container">
                <h3>Login</h3>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
