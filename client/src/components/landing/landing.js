import { Link } from 'react-router-dom';
import './landing.css'

export default function Landing() {

    return (
        <div className='cont'>
        <h1 className='title'>Welcome</h1>
            <Link to="/countries">
            <button className="cta">
                <span>Go home!</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
            </button>
            </Link>
            <div className="globo"><div className="frontal"></div><div className="mapfront"></div><div className="mapback"></div><div className="back"></div></div>

        </div>
    );
}