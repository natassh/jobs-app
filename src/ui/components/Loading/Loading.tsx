import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading show" data-testid="loadingSpin">
        <div className="spin"> </div>
        {/* <p>Loading</p> */}
    </div>
  );
}
export default Loading;

