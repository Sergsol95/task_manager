import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="header-left">
          <div className="menu-icon"></div>
          <h1>Dashboard</h1>
        </div>
        <div className="header-right">
          <input type="text" placeholder="Search task" />
          <div className="search-icon"></div>
        </div>
      </header>
    );
  };

export default Header;