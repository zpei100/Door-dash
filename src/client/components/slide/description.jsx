import React from 'react';

export default ({title, paragraph, linkText}) => (
  <div className="slide-description">
    <p>{title}</p>
    <p>{paragraph}</p>
    <p>{linkText}</p>
  </div>
)