import React from 'react';

export default ({idx, handleClick}) => (
  <button className="indicator-button" onClick={e => handleClick(e, idx)}></button>
) 