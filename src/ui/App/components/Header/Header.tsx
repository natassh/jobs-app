import React from 'react';
import MainTitle from '../MainTitle';
//import LightDarkMode from '../../../components/LightDarkMode';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="cw">
        <MainTitle>
          devjobs
        </MainTitle>
        {/* <LightDarkMode/> */}
      </div>
    </header>
  );
}

export default Header;

