import React from 'react';
import ToogleColorTheme from '../../../modules/color-theme-scheme/components/ToogleColorTheme';
import './Header.css';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="cw">
        <div className="mainHeader">
          <Link to={`/`} className="return">
            <h1>
              <img src={logo} alt="Logo devjobs" />
            </h1>
          </Link>
          <ToogleColorTheme/>
        </div>
      </div>
    </header>
  );
}

export default Header;
