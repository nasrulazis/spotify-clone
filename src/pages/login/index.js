import { useState , useEffect} from 'react';
import { handleAuth, handleLogin } from '../../utils/auth';


const Login=()=>{
    const [color, setColor] = useState('rgb(25,20,20)');
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };
    useEffect(() => {
        // Update the color every second using setInterval
        const intervalId = setInterval(() => {
            const randomColor = getRandomColor();
            setColor(randomColor);
        }, 200);
        return () => clearInterval(intervalId);
        
    }, []);
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-[#191414]">
            <h1 className="text-white text-6xl mb-10 font-bold" >SPOTIFY <span style={{ color }}>CLONE</span></h1>
            
            <a className="flex align-center justify-center py-4 px-8 bg-green-500 hover:bg-green-600 focus:ring-2 cursor-pointer focus:ring-green-500 focus:outline-none rounded-full shadow-lg text-white font-bold tracking-wide" onClick={handleLogin}>
                <img src="./images/logo.png" alt="Logo" className="w-10" />
                <div className="flex items-center p-2">
                    <p className="h-max">Login with Spotify</p>
                </div>
            </a>
            <h4 className="text-white mt-4">&copy; Nasrul Azis</h4>
        </div>
    )
}
export default Login;