import React, { Component } from 'react';
import Info from '../info/info.jsx';
import Search from '../search/search.jsx';

export default class Hero extends Component {
  render() {
    return (
      <div id="hero" className="d-flex">
        <div className="middle w-100">
          <Info></Info>
          <Search></Search>
        </div>
      </div>
    );
  }
}