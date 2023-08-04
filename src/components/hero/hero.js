import "./hero.css";
import GreenButton from '../button/green_play_button';

const Hero = ({ dataPlaylist }) => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };
    return (
    <div className="flex items-center justify-center bg-gradient-to-t from-[#191414] to-[#117088] ">
        <div className="flex items-center justify-center w-2/3 p-6 bg-[#0a0a0a] rounded-sm">
            <div className="w-[300px] flex justify-center items-center mr-4">
                <img src={dataPlaylist.images[0].url} alt="Hero" className="w-100 m-0" />
            </div>
            <div className="w-full h-[250px] flex flex-col items-start justify-around">
                <h1 className="font-bold text-6xl text-gray-200">{dataPlaylist.name}</h1>
                <p className=" py-2 font-semibold text-gray-200">{dataPlaylist.description}</p>
                <GreenButton onClick={handleButtonClick}>Play</GreenButton>
            </div>
        </div>
    </div>
    );
};

export default Hero;