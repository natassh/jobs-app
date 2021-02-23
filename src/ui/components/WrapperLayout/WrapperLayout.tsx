import React from 'react';
import './WrapperLayout.css';

const WrapperLayout: React.FC<WrapperLayoutProps> = ({children}) => {
  return (
    <div className="cw">
      {children}
    </div>
  );
}
export default WrapperLayout;



type WrapperLayoutProps = {
  className?: string,
  children: React.ReactNode
}
