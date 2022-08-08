import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const hex = rgbToHex(...rgb);

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  console.log(hexColor);
  const hexVal = `#${hexColor}`;
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexVal}</p>
    </article>
  );
};

export default SingleColor;
