import "./hero.css";
import GreenButton from '../button/green_play_button';

const Hero = () => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };
    return (
    <div className="hero-background">
        <div className="hero-container">
            {/* <div className="content-container"> */}
                <div div className="image-container">
                <img src="/images/album/heavy_rotation.jpg" alt="Hero" className="hero-image" />
                </div>
                <div className="text-container">
                    <h1 className="hero-title">JKT48-Heavy Rotation</h1>
                    <p className="hero-subtitle">Seru seruan dengan playlist dari JKT48 Heavy Rotation!</p>
                    <GreenButton onClick={handleButtonClick}>Play</GreenButton>
                {/* </div> */}
            </div>
        </div>
    </div>
    );
};

export default Hero;