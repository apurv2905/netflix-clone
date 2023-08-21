import React from "react";
import './ProfileScreen.css';
import Nav from "../Homescreen/Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import {auth} from "../../Firebase/firebase";
import PlanScreen from "./PlanScreen";

const ProfileScreen = () => {
    const user = useSelector(selectUser);

    return (
        <div className="profile-screen">
            <Nav />
            <div className="profile-screen_body">
                <h1>Edit Profile</h1>
                <div className="profile-screen_info">
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt=""/>
                    <div className="profile-screen_details">
                        <h2>{user.email}</h2>
                        <div className="profile-screen_plans">
                            <h3>Plans (Current Plan: Premium)</h3>
                            <PlanScreen />
                            <button
                                onClick={() => auth.signOut()}
                                className="profile-screen_signout"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;