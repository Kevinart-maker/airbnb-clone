import group from '/photo-grid.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={group} alt="" />
            <div className="text">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by <br />
                one-of-a-kind hosts-all without leaving <br />
                home.
                </p>
            </div>
        </div>
    );
}
 
export default Hero;