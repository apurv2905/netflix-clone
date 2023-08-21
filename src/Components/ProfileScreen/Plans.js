import React from "react";
import './Plans.css';
import {useHistory} from "react-router-dom";

const Plans = ({ name, quality, isActive=false }) => {
    const history = useHistory();
    return (
        <div className="plans">
            <div className="plans-info">
                <p>{name}</p>
                <p>{quality}</p>
            </div>
            <div className="plans-button">
                {isActive ? (
                    <button className="plans-button_package">Current Package</button>
                ) : (
                    <button onClick={() => history.push("/greetings")} className="plans-button_subscribe">Subscribe</button>
                )}

            </div>
        </div>
    );
}

export default Plans;