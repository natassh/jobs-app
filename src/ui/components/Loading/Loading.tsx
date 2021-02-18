import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading show">
        <div className="spin"> </div>
        {/* <p>Loading</p> */}
    </div>
  );
}
export default Loading;

