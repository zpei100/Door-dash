import React from 'react';
import Info from '../info/info.jsx';
import Search from '../search/search.jsx';
import GetApp from '../getApp/getApp.jsx';

export default ({word, next}) => (
  <div id="hero-content">
    <div className="description">
      <Info 
        word={word} 
        next={next} />
      <Search />
    </div>

    <GetApp 
      color="white" 
      bgColor="white" 
      hoverColor="lightgrey"
    />
  </div>
)