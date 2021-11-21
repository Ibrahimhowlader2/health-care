import React from 'react';
import './Login.css';

const Login = ({isLoginOpen}) => {
    return (
        <>
            <div class={`login-form-container ${isLoginOpen ? 'active' : ''}`}>

                <form >
                    <h3>login form</h3>
                    <input type="email" name="" placeholder="enter your email" id="" class="box"/>
                        <input type="password" name="" placeholder="enter your password" id="" class="box"/>
                            <div class="remember">
                                <input type="checkbox" name="" id="remember-me"/>
                                <label for="remember-me">remember me</label>
                            </div>
                            <input type="submit" value="login now" class="btn"/>
                                <p>forget password? <a href="/#">click here</a></p>
                                <p>don't have an account? <a href="/#">create one</a></p>
                            </form>

                        </div>
                    </>
    );
};

export default Login;