import {Icon} from '@shopify/polaris';
import {PlayMajor} from '@shopify/polaris-icons';
const SinglePlaylistButton = ({ playlistTitle,playlistSubTitle, onClick,imageUrl }) => {
    return (
    <div className="bg-[#252222] px-4 py-4 mx-3 my-2 rounded-lg cursor-pointer flex-col justify-center items-center w-[210px] h-80 hover:bg-[#313131] duration-300" >
        <div className="relative group">

            <img src={imageUrl} alt="" className="w-[200px] m-0 h-[160px] rounded-lg object-cover  group-hover:opacity-50"/>
            <button className=" bg-white/80 text-white py-2 h-[50px] px-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" onClick={onClick}>
            <Icon source={PlayMajor} color="Gray-100"/>
            </button>
        </div>
        {/* <h1 className="font-bold text-xl text-gray-200 px-2 py-2">{playlistTitle}</h1>
        <p className="text-sm px-2 text-gray-400">{playlistSubTitle}</p> */}
        {playlistTitle.length<27&&<h1 className="font-bold text-xl text-gray-200 px-2 py-2">{playlistTitle}</h1>}
        {playlistTitle.length>=27&&<h1 className="font-bold text-xl text-gray-200 px-2 py-2">{playlistTitle.substring(0, 21)}...</h1>}
        {playlistSubTitle.length>40&&<p className="text-sm px-2 text-gray-400">{playlistSubTitle.substring(0, 40)}...</p>}
        {playlistSubTitle.length<=40&&<p className="text-sm px-2 text-gray-400">{playlistSubTitle}</p>}
    </div>
    );
};

export default SinglePlaylistButton;