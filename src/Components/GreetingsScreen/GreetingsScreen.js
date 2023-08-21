import React, {useEffect, useState} from "react";
import Nav from "../Homescreen/Nav";
import Lottie from 'react-lottie';
import loading from './loading.json';
import thankyou from './thankyou.json';
import './GreetingsScreen.css';
import {useHistory} from "react-router-dom";

const GreetingsScreen = () => {
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();
    const loadingAnimation = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const thankingAnimation = {
        loop: true,
        autoplay: true,
        animationData: thankyou,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 5000)
    }, [loaded]);

    return (
        <div>
            <Nav />
            <div className="greetings-animation">
                {!loaded ? (
                    <>
                        <Lottie options={loadingAnimation} height={200} width={200}/>
                        <p className="greetings-para">Grab your comfy blanket while we finalize your streaming pass!</p>
                    </>
                ) : (
                    <>
                        <Lottie options={thankingAnimation} height={200} width={400}/>
                        <p className="greetings-para">Flick the switch and let the binge-watching begin!</p>
                        <button className="home-button" onClick={() => history.push("/")}>Home</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default GreetingsScreen;