import React from 'react';
import ToogleColorTheme from '../../../modules/color-theme-scheme/components/ToogleColorTheme';
import './Header.css';
import logo from '../../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="cw">
        <div className="mainHeader">
          <h1>
            <img src={logo} alt="Logo devjobs" />
          </h1>
          <ToogleColorTheme/>
        </div>
      </div>
    </header>
  );
}

export default Header;

