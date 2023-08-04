import React, { useEffect, useState } from 'react';
import {Icon} from '@shopify/polaris';
import {CustomersMajor,SearchMajor} from '@shopify/polaris-icons';
import { Link, Route } from 'react-router-dom';


const Navbar = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleProfileClick = () => {
        setShowProfileMenu((prev) => !prev);
    };
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    function handleSearch(e) {
        e.preventDefault();
        setSearchTerm(e.target.value);
        const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track`;
        fetch(searchEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.tracks.items)
            })
            .catch((error) => console.log(error));
    }
    const [accessToken, setAccessToken] = useState("");
    useEffect(() => {
        setAccessToken(localStorage.getItem('token'));
    }, []);
    
    return (
        <nav className="flex justify-between items-center h-[70px] p-4 bg-[#117088] rounded-t-2xl">
            <div className="flex items-center w-10">
                <img src="./images/logo.png" alt="Logo" className="logo" />
                <form className='flex p-2 bg-white rounded-full mx-2'>
                    <Icon source={SearchMajor} color="base" className="px-2"/>
                    <input type="text" className='px-2 py-1 focus:outline-none' placeholder='Search Song' value={searchTerm} onChange={handleSearch} />
                </form>
            </div>
            <div className="relative">
                <div className="cursor-pointer p-2 rounded-full bg-gray-200/50" onClick={handleProfileClick}>
                    <Icon source={CustomersMajor} color="base"/>
                        {/* <img src="./images/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="Profile" className="profile-img" /> */}
                </div>
                {showProfileMenu && (
                    <div className="absolute top-full right-0 bg-white shadow-md w-40">
                        <ul>
                            <li className='p-3'>Account</li>
                            <li className='p-3'>Profile</li>
                            <li className='p-3'><Link to={`/`}>Logout</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;