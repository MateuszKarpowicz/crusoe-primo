import React from 'react';
import wifiIcon from '../assets/highlights/wifi-icon.png';
import sofaIcon from '../assets/highlights/sofa-icon.png';
import foodIcon from '../assets/highlights/food-icon.png';
import washerIcon from '../assets/highlights/washer-icon.png';
import climatIcon from '../assets/highlights/clima-icon.png';
import seaIcon from '../assets/highlights/sea-icon.png';

import "../scss/Highlights.scss";

const Highlights = () => {
  return (
    <div className="highlights-container">
      <div className="highlights-icons">
        <div className="highlights-wifi" style={{ backgroundImage: `url(${wifiIcon})` }}></div>
        <div className="highlights-sofa" style={{ backgroundImage: `url(${sofaIcon})` }}></div>
        <div className="highlights-food" style={{ backgroundImage: `url(${foodIcon})` }}></div>
        <div className="highlights-washer" style={{ backgroundImage: `url(${washerIcon})` }}></div>
        <div className="highlights-clima" style={{ backgroundImage: `url(${climatIcon})` }}></div>
        <div className="highlights-sea" style={{ backgroundImage: `url(${seaIcon})` }}></div>
      </div>
    </div>
  );
}

export default Highlights;
