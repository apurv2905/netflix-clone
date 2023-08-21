import React, {useRef} from "react";
import './Signup.css';
// import {app} from "../../Firebase/firebase";
// import { } from 'firebase/auth';
// import firebase from ("firebase/compat", "firebase/auth");
import { auth } from "../../Firebase/firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {useHistory} from "react-router-dom";

const Signup = () => {
    const history = useHistory();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = async (event) => {
        event.preventDefault();
        // auth.createUserWithEmailAndPassword(
        //     emailRef.current.value,
        //     passwordRef.current.value
        // ).then((authUser) => {
        //
        // }).catch((error) => {
        //     alert(error.message);
        // });
        await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // console.log(userCredential);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const signIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // console.log(userCredential);
                history.push("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="sign-up">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="sign-up_grey">New to Netflix? </span>
                    <span className="sign-up_link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default Signup;