import "./playlist.css";
import SinglePlaylistButton from "../button/single_playlist_button";

const Playlist = () => {
    const playlists = {
        song1 :{
            title: 'Heavy Rotation',
            subTitle: '2022 - JKT48 - Heavy Rotation Album',
            imageUrl: '/images/album/heavy_rotation.jpg'
        },
        song2 :{
            title: 'Rapsodi',
            subTitle: '2023 - JKT48 - Rapsodi',
            imageUrl: '/images/album/rapsodi.jpg'
        },
    }
    return (
    <div className="top-playlist-container">
        <div className="text-container">
        <h1 className="playlist-title">All Playlist</h1>
        </div>
        <div className="playlist-container">
            <SinglePlaylistButton 
                playlistTitle={playlists.song1.title} 
                playlistSubTitle={playlists.song1.subTitle} 
                imageUrl={playlists.song1.imageUrl}>
            </SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'White Album'} playlistSubTitle={'2022 - JKT48 - White Album'} imageUrl={'/images/album/white_album.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Heavy Rotation'} playlistSubTitle={'2022 - JKT48 - Heavy Rotation Album'} imageUrl={'/images/album/heavy_rotation.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Heavy Rotation'} playlistSubTitle={'2022 - JKT48 - Heavy Rotation Album'} imageUrl={'/images/album/heavy_rotation.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
        </div>
    </div>
    );
};

export default Playlist;