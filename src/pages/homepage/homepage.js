import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero';
import TopPlaylist from '../../components/top_playlist/top_playlist';
import Playlist from '../../components/playlist/playlist';
import LeftNavbar from '../../components/navbar/left-navbar';
import { useEffect, useState } from 'react';

const Homepage=()=>{
    const [featuredPlaylist, setFeaturedPlaylist] = useState(null);
    const [newRealeases, setNewRealeases] = useState(null);
    const [heroPlaylist, setHeroPlaylist] = useState(null);
    const [searchData, setSearchData] = useState([]);

    const handleBanner = async (e)=> {
        const accessToken = localStorage.getItem('token');
        const searchEndpoint = `https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1kR98I`;
        fetch(searchEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setHeroPlaylist(data)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    const handleFeatured = async (e)=> {
        const accessToken = localStorage.getItem('token');
        const searchEndpoint = `https://api.spotify.com/v1/browse/featured-playlists?country=ID&limit=6`;
        await fetch(searchEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setFeaturedPlaylist(data.playlists.items);
        })
        .catch((error) => {
            console.log(error)
        });
    }
    const handleNewReleases = async (e)=> {
        const accessToken = localStorage.getItem('token');
        const searchEndpoint = `https://api.spotify.com/v1/browse/featured-playlists?country=US`;
        await fetch(searchEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setNewRealeases(data.playlists.items);
            
        })
        .catch((error) => {
            console.log(error)
        });
    }
    const getData = (data) =>{
        
        setSearchData(data)
    }
    useEffect(()=>{
        searchData.length>0?console.log('data'+ searchData):console.log('null')
        
    },[searchData])
    useEffect(() => {
        

        handleBanner();
        handleFeatured();
        handleNewReleases();
        
    }, []);
    if (featuredPlaylist === null || heroPlaylist === null || newRealeases==null) {
        return <div>Loading...</div>;
    }
    console.log("___"+heroPlaylist)
    return( 
    <div className='flex bg-black p-2'>
        <LeftNavbar/>
        <div className='bg-[#191414] rounded-2xl w-4/5' >
            {searchData.length>0?<Navbar backgroundColor='#fff' onChange={getData}/>:<Navbar onChange={getData}/>}
            {searchData.length>0?null:<Hero playlistSingle={heroPlaylist}/>}
            {searchData.length>0?null:<TopPlaylist dataPlaylist={featuredPlaylist}/>}
            {searchData.length>0?<Playlist titleSection='All Results' dataPlaylist={searchData}/>:<Playlist titleSection='All Playlist' dataPlaylist={newRealeases}/>}
            
        </div>
    </div>
    )
}

export default Homepage;