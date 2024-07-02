import React from 'react';
import '../styles.css';

const Header = () => (
    <header>
        <input type="search" placeholder="Search everything" />
        <div className="notifications">🔔</div>
        <div className="user-profile">
            <img src="" alt="User Avatar" />
            <span></span>
        </div>
    </header>
);

export default Header;