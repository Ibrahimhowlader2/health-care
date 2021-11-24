import React from 'react';

const Register = ({ isLoginOpen }) => {
    return (
        <>
            <div class={`login_form ${isLoginOpen ? 'active' : ''}`}>

                <div className="login_Container">
                    <form >
                        <h3>Register form</h3>
                        <input type="text" name="name" placeholder="enter your name" id="name" class="box" />
                        <input type="email" name="email" placeholder="enter your email" id="email" class="box" />
                        <input type="password" name="password" placeholder="enter your password" id="password" class="box" />
                        <input type="password" name="password" placeholder="re-enter your password" id="password" class="box" />
                        <div class="remember">
                            <input type="checkbox" name="checkbox" id="remember-me" />
                            <label for="remember-me">remember me</label>
                        </div>
                        <input type="submit" value="Register now" class="btn" />
                        <p>forget password? <a href="/#">click here</a></p>
                        <p>have an account? <a href="/login">create one</a></p>
                    </form>
                    <div className="google-sign-in">
                        <button className="btn">Sign In With Google</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Register;