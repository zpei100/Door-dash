import React from 'react';

export default ({title, paragraph, linkText, direction, color}) => {
  const padding = direction === 'right' ? 'paddingLeft' : 'paddingRight'; 
  
  return (
    <div 
      className="description" 
      style={{[padding]: '6%'}}
    >
      <p style={{color}}>{title}</p>
      <p>{paragraph}</p>
      <p style={{color}}>{linkText}</p>
    </div>
  )
}