import React from 'react';
import './MainTitle.css';

const MainTitle: React.FC<MainTitleProps> = ({ children }) => (
  <h1 className="MainTitle">{children}</h1>
);

export default MainTitle;

type MainTitleProps = {
  children: React.ReactNode
}