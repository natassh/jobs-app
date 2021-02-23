import React from 'react';
import { Link } from 'react-router-dom';
import ToogleColorTheme from '../../../modules/color-theme-scheme/components/ToogleColorTheme';
import WrapperLayout from '../../../components/WrapperLayout';
import logo from '../../../assets/images/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <WrapperLayout>
        <div className="mainHeader">
          <Link to={`/`} className="return">
            <h1>
              <img src={logo} alt="Logo devjobs" />
            </h1>
          </Link>
          <ToogleColorTheme/>
        </div>
      </WrapperLayout>
    </header>
  );
}

export default Header;
