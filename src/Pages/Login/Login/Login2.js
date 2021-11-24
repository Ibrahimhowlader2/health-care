import React, { useState } from 'react';
import './Login2.css';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';
const Login2 = () => {
    const [loginData, setLoginData] = useState({});

    const { user, authError, loginUser, signInWithGoogle, isLoading } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <>
        <Navbar/>
            <section className="login-form">

                <div className="form_container">
                    <form onSubmit={handleLoginSubmit}>
                        <h3>user login</h3>
                        <div className="inputBox">
                            <span className="fas fa-user"></span>
                            <input
                                type="email"
                                name="email"
                                placeholder="enter your email"
                                id="email"
                                onBlur={handleOnChange}
                            />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-lock"></span>
                            <input
                                type="password"
                                name="password"
                                placeholder="enter your password"
                                id="password"
                                onBlur={handleOnChange}
                            />
                        </div>
                        <input type="submit" value="sign in" className="tb_btn" />
                        <div className="flex">
                            <input type="checkbox" name="" id="remember-me" />
                            <label htmlFor="remember-me">remember me</label>
                            <a href="/">forgot password?</a>
                        </div>
                        <Link to="/register2" className="already_acc">create an account</Link>
                        <div className="py-3 fs-4">-----------------Or-----------------</div>

                    </form>
                    <button onClick={handleGoogleSignIn} className="tb_btn">Sign In With Google</button>
                </div>
                {
                    isLoading && <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    user?.email && <div className="success_error alert alert-success" role="alert">
                        Login Successfully !
                    </div>
                }
                {
                    authError && <div className="success_error alert alert-danger" role="alert">
                        {authError}
                    </div>
                }

            </section>

        </>
    );
};

export default Login2;