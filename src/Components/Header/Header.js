import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1 className="brand-name">Model Alpha</h1>
                <p>Find your model for your next promotional Photoshoot</p>
                <h6 className='budget'>Total budgets:20 Million Dollar</h6>

                <nav><a href="/home">Home</a>
                    <a href="/Model">Model</a>
                    <a href="/bookings">Bookings</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;