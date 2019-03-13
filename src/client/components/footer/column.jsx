import React from 'react';

export default ({title, list}) => {
  
  return (
    <div>
      <p>{title}</p>
      <div style={{display: 'flex'}}>
        <ul>
          {list.slice(0, 6).map(item => <li>{item}</li>)}
        </ul>
        {list.length > 6 ? <ul style={{marginLeft: '20%', 'whiteSpace': 'nowrap'}}>
          {list.slice(6).map(item => <li>{item}</li> )}
        </ul> : ''}
      </div>
    </div>
)}