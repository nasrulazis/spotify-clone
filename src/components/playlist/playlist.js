import SinglePlaylistButton from "../button/single_playlist_button";

const Playlist = ({ dataPlaylist }) => {
    return (
    <div className="flex-col items-start justify-center px-20 py-4 w-[1600px]">
        <h1 className="text-3xl font-bold text-gray-200 px-2 py-4">All Playlist</h1>
        <div className="flex items-center justify-items-start flex-wrap w-full">
            {dataPlaylist.map((playlist)=>(
                <SinglePlaylistButton key={playlist.id} playlistTitle={playlist.name} playlistSubTitle={playlist.description} imageUrl={playlist.images[0].url}></SinglePlaylistButton>
            ))}
        </div>
    </div>
    );
};

export default Playlist;