import React from 'react';

export default ({title, list}) => {
  
  return (
    <div>
      <p>{title}</p>
      <div style={{display: 'flex'}}>
        <ul>
          {list.slice(0, 6).map(item => <li>{item}</li>)}
        </ul>

        {/* hard coded second column */}
        {
          list.length > 6 ? 
            <ul className="second-column">
              {list.slice(6).map(item => <li>{item}</li> )}
            </ul> 
          : ''
        }

      </div>
    </div>
)}