import React, { useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import iconMoon from '../../../../assets/images/icon-moon.svg';
import iconSun from '../../../../assets/images/icon-sun.svg';
import './ToogleColorTheme.css';

const ToogleColorTheme: React.FC = () => {
  const { colorSchema, changeTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    if(colorSchema === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  }
  
  return (
    <div className="ToogleColorTheme" onClick={handleOnClick}>
      <img src={iconSun} className="sunIcon" alt="Icono sol" />
      <button></button>
      <img src={iconMoon} className="moonIcon" alt="Icono luna" />
    </div>
  ) 
}
export default ToogleColorTheme;
