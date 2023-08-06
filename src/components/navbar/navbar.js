import React, { useEffect, useState } from 'react';
import {Icon} from '@shopify/polaris';
import {CustomersMajor,SearchMajor} from '@shopify/polaris-icons';
import { Link } from 'react-router-dom';


const Navbar = ({backgroundColor='#117088', onChange}) => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleProfileClick = () => {
        setShowProfileMenu((prev) => !prev);
    };

    const [accessToken, setAccessToken] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let bg_class = `flex justify-between items-center h-[70px] p-4 bg-[${backgroundColor}] rounded-t-2xl`
    console.log('color'+bg_class)
    
    useEffect(()=>{
        if (searchTerm!=="") {
            setAccessToken(localStorage.getItem('token'));
            const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=playlist`;
            fetch(searchEndpoint, {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.playlists.items)
            })
            .catch((error) => console.log(error));
        }
    },[searchTerm]);
    const handleSearch = (e) => {
        // e.preventDefault();
        setSearchTerm(e.target.value);
        
    }
    
    useEffect(() => {
        console.log(searchResults)
        if (searchResults!=="") {
            onChange(searchResults);
        }
    }, [searchResults]);
    
    return (
        <nav className={bg_class}>
            <div className="flex items-center w-10">
                <img src="./images/logo.png" alt="Logo" className="logo" />
                <form className='flex p-2 bg-white rounded-full mx-2' >
                    <button type="submit">
                        <Icon source={SearchMajor} color="base" className="px-2"/>
                    </button>
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