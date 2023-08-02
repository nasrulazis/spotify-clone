import "./top_playlist.css";
import TopPlaylistButton from "../button/top_playlist_button";

const TopPlaylist = () => {
    return (
    <div className="top-playlist-container">
        <div className="text-container">
        <h1 className="playlist-title">Top Playlist</h1>
        </div>
        <div className="playlist-container">
            <TopPlaylistButton playlistTitle={'Heavy Rotation'} imageUrl={'/images/album/heavy_rotation.jpg'}></TopPlaylistButton>
            <TopPlaylistButton playlistTitle={'Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></TopPlaylistButton>
            <TopPlaylistButton playlistTitle={'White Album'} imageUrl={'/images/album/white_album.jpg'}></TopPlaylistButton>
            {/* <TopPlaylistButton playlistTitle={'White Album'} imageUrl={'/images/album/white_album.jpg'}></TopPlaylistButton> */}
        </div>
    </div>
    );
};

export default TopPlaylist;