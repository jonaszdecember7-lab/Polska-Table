import Kluskiśląskie from '../assets/images/Kluskiśląskie.jpg';
import Rosol from '../assets/images/Rosol.png';
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="about-us-page">
            <h1>Why Dine with Us?</h1>
            <p>From classic Polish Sunday dinners to weekday comfort — we’re here to make you feel like you’ve just walked into a family gathering.</p>
            <div className="about-us-grid">

                <div className="photo1">
                    <img src={Kluskiśląskie} alt="Kluski śląskie image" className="aboutmephoto" />
                </div>
                <div className="info1">
                    <h2>Handmade with Love</h2>
                    <p>These soft kluski śląskie are shaped by hand every morning with fresh potatoes
                        and flour — a tradition we never rush. Just like babcia made them, they're
                        comforting, simple, and perfect with butter or sour cream. One bite takes
                        you straight back home.</p>
                    <button className="view-menu-button" onClick={() => navigate('/menu')}>View Menu</button>
                </div>
                <div className="photo2">
                    <img src={Rosol} alt="Rosół image" className="aboutmephoto" />


                </div>
                <div className="info2">
                    <h2>A Hug in a Bowl</h2>
                    <p>Our rosół simmers slowly with whole chicken, carrots, and herbs until the broth
                        is rich and golden. It's pure Polish comfort — warm, nourishing, and full of
                        love. No shortcuts, just time and care in every pot, like a hug in a bowl.</p>
                    <button className="view-menu-button" onClick={() => navigate('/menu')}>View Menu</button>
                </div>
            </div>
        </div>
    );
}

