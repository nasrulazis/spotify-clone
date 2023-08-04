import SinglePlaylistButton from "../button/single_playlist_button";

const Playlist = () => {
    return (
    <div className="flex-col items-start justify-center px-20 py-4 w-[1600px]">
        <h1 className="text-3xl font-bold text-gray-200 px-2 py-4">All Playlist</h1>
        <div className="flex items-center justify-items-start flex-wrap w-full">
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'White Album'} playlistSubTitle={'2022 - JKT48 - White Album'} imageUrl={'/images/album/white_album.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Heavy Rotation'} playlistSubTitle={'2022 - JKT48 - Heavy Rotation Album'} imageUrl={'/images/album/heavy_rotation.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Heavy Rotation'} playlistSubTitle={'2022 - JKT48 - Heavy Rotation Album'} imageUrl={'/images/album/heavy_rotation.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Heavy Rotation'} playlistSubTitle={'2022 - JKT48 - Heavy Rotation Album'} imageUrl={'/images/album/heavy_rotation.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
            <SinglePlaylistButton playlistTitle={'Rapsodi'} playlistSubTitle={'2023 - JKT48 - Rapsodi'} imageUrl={'/images/album/rapsodi.jpg'}></SinglePlaylistButton>
        </div>
    </div>
    );
};

export default Playlist;