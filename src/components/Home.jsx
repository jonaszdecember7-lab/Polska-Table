import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            
            <div className='hero-landing'>
                <div className='hero-information'>
                    <h1>Welcome to Polska Table!</h1>
                    <p>Discover our diverse menu of comforting Polish classics —
                        delicate pierogi, rich rosół, hearty bigos, and timeless favorites —
                        all prepared with cherished family recipes passed down through generations.</p>
                    <button className="view-menu-button" onClick={() => navigate('/menu')}>View Menu</button>
                </div>
            </div>
        </div>
    );
}
