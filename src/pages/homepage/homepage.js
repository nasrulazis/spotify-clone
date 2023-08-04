import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero';
import TopPlaylist from '../../components/top_playlist/top_playlist';
import Playlist from '../../components/playlist/playlist';
import LeftNavbar from '../../components/navbar/left-navbar';
import { useEffect, useState } from 'react';

const Homepage=()=>{
    const [featuredPlaylist, setFeaturedPlaylist] = useState('')
    const [heroPlaylist, setHeroPlaylist] = useState('')

    async function handleFeatured(e) {
        const accessToken = localStorage.getItem('token');
        const searchEndpoint = `https://api.spotify.com/v1/browse/featured-playlists?limit=12`;
        fetch(searchEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setFeaturedPlaylist(data.playlists.items)
            })
            .catch((error) => console.log(error));
    }
    async function handleBanner(e){
        const accessToken = localStorage.getItem('token');
        const searchEndpoint = `https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1kR98I`;
        fetch(searchEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((data) => {
                setHeroPlaylist(data)
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        handleFeatured()
        handleBanner()
    }, []);
    return( 
    <div className='flex bg-black p-2'>
        <LeftNavbar/>
        <div className='bg-[#191414] rounded-2xl' >
            <Navbar />
            <Hero dataPlaylist={heroPlaylist}/>
            <TopPlaylist dataPlaylist={featuredPlaylist}/>
            <Playlist/>
        </div>
    </div>
    )
}

export default Homepage;