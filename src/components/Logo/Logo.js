import React from 'react';
import Tilt from 'react-tilt';
import logo from './faceRecLogo.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 170, width: 170 }} >
                <div className="Tilt-inner pa3">
                <img style={{paddingTop: '20px'}} alt='logo' src={logo}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo