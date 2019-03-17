import React, { Component } from 'react';
import Flag from './flag.jsx';
import $ from 'jquery';

export default class Search extends Component {
  render() {
    return (
      <div ref={e => this.search = $(e)} className="search">
        <div className="input-bar">
          <span className="icon"><Flag/></span>
          <input
            onFocus={e => this.search.toggleClass('teal-shadow')} 
            onBlur={e => this.search.toggleClass('teal-shadow')} 
            type="text" 
            placeholder="Enter your delivery address"
          />
        </div>
        <button 
          onMouseEnter={e => $(e.target).toggleClass('dark')}
          onMouseLeave={e => $(e.target).toggleClass('dark')}
        >
          Find Restaurants
        </button>
      </div>
    );
  }
}