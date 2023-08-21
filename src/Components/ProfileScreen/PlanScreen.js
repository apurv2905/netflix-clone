import React from "react";
import './PlanScreen.css';
import Plans from "./Plans";

const PlanScreen = () => {
    return (
        <div className="plan-screen">
            <p>Renewal date: 01/01/2023</p>
            <Plans name={"Netflix Standard"} quality={"1080p"}/>
            <Plans name={"Netflix Basic"} quality={"480p"}/>
            <Plans name={"Netflix Premium"} quality={"4K + HDR"} isActive/>
        </div>
    );
}

export default PlanScreen;