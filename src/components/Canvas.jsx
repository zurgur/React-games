import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"    
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonBase />
      <CannonPipe rotation={45} />
    </svg>
  );
};

export default Canvas;