import React, { Component } from 'react';
import Info from '../info/info.jsx';
import Search from '../search/search.jsx';
import Image01 from './images/hero01.jpg';
import Image02 from './images/hero02.jpg';

export default class Hero extends Component {
  render() {
    return (
      <div id="hero" className="d-flex">
        <div id="hero-description" className="middle w-100">
          <Info></Info>
          <Search></Search>
        </div>
        <div className="hero-image hero-left"><img src={Image02}/></div>
        <div className="hero-image hero-right"><img src={Image01}/></div>
      </div>
    );
  }
}