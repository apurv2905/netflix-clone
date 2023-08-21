import React, {useState} from "react";
import './LoginScreen.css';
import Signup from "./Signup";

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login-screen">
            <div className="login-screen_background">
                <img
                    className="login-screen_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button onClick={() => setSignIn(true)} className="login-screen_button">Sign In</button>
                <div className="login-screen_gradient" />
            </div>
            <div className="login-screen_body">
                {signIn ? (
                    <Signup />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart the membership.</h3>

                        <div className="login-screen_input">
                            <form>
                                <input type="email" placeholder="Email address"/>
                                <button onClick={() => setSignIn(true)} className="login-screen_getstarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;