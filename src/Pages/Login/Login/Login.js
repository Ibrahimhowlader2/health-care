import React from 'react';
import './Login.css';

const Login = ({ isLoginOpen }) => {
    return (
        <>
        
            <div class={`login_form ${isLoginOpen ? 'active' : ''}`}>

                <div className="login_Container">
                    <form >
                        <h3>login form</h3>
                        <input type="email" name="email" placeholder="enter your email" id="email" class="box" />
                        <input type="password" name="password" placeholder="enter your password" id="password" class="box" />
                        <div class="remember">
                            <input type="checkbox" name="checkbox" id="remember-me" />
                            <label for="remember-me">remember me</label>
                        </div>
                        <input type="submit" value="login now" class="tb_btn" />
                        <p>forget password? <a href="/#">click here</a></p>
                        <p>don't have an account? <a href="/register">create one</a></p>
                    </form>
                    <div className="google-sign-in">
                        <button className="tb_tn">Sign In With Google</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;