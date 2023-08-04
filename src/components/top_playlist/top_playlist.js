import TopPlaylistButton from "../button/top_playlist_button";
import SinglePlaylistButton from "../button/single_playlist_button";
import { useEffect, useState } from "react";



const TopPlaylist = ({ dataPlaylist }) => {
    const [playlists, setPlaylist] = useState([])
    useEffect(() => {
        setPlaylist(dataPlaylist);
    }, []);
    return (
    <div className="flex-col items-start justify-center px-20 py-4 w-[1600px]">
        <h1 className="text-3xl font-bold text-gray-200 px-2 py-4 ">Featured Playlist</h1>
        <div className="flex items-center justify-start flex-wrap w-100">
            {playlists.map((playlist)=>(
                <SinglePlaylistButton key={playlist.id} playlistTitle={playlist.name} playlistSubTitle={playlist.description} imageUrl={playlist.images[0].url}></SinglePlaylistButton>
            ))}
        </div>
    </div>
    );
};

export default TopPlaylist;