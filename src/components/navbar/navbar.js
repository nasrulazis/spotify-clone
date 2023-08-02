import React, { useState } from 'react';
import "./navbar.css";
import {Icon} from '@shopify/polaris';
import {CustomersMajor} from '@shopify/polaris-icons';


const Navbar = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleProfileClick = () => {
        setShowProfileMenu((prev) => !prev);
    };

    return (
        <nav className="navbar">
        <div className="logo-container">
        <img src="./images/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="profile-container">
        <div className="profile-icon" onClick={handleProfileClick}>
        <Icon
        source={CustomersMajor}
        color="base"
        />
            {/* <img src="./images/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="Profile" className="profile-img" /> */}
        </div>
        {showProfileMenu && (
            <div className="profile-menu">
                <ul>
                    <li>Account</li>
                    <li>Profile</li>
                    <li>Log out</li>
                </ul>
            </div>
        )}
        </div>
    </nav>
    );
};

export default Navbar;