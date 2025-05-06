import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { getUserLogin } from "../api/getUserLogin"



const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setFormError("Veuillez saisir votre Email et votre Password");
            return;
        } else {
            setFormError(''); 
        }
        
        dispatch( getUserLogin({ email, password }))
            .then(() => {
                navigate('/profil');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <form>
                {formError && (
                    <p style={{ color: 'red', marginTop: '10px' }}>
                        {formError}
                    </p>
                )}
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>

                </div>
                <button className="sign-in-button" type="submit" disabled={isLoading} onClick={handleSubmit}>
                    {isLoading ? 'Loading...' : 'Sign in'}
                </button>
            </form>
        </div>
    )
}

export default LoginForm;