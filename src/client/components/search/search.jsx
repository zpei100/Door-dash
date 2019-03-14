import React, { Component } from 'react';
import Flag from './flag.jsx';
import $ from 'jquery';

export default class Search extends Component {
  highlight() {
    this.search.css({boxShadow: '0 0 3pt 2pt #80CED7'});
  }

  removeHighlight() {
    this.search.css({boxShadow: 'none'})
  }

  render() {
    return (
      <div ref={e => this.search = $(e)} className="search w-auto o-hidden" style={{display: 'table'}}>
        <div className="h-100" style={{display: 'table-cell'}}>
          <span className="p-2"><Flag/></span>
          <input
            onFocus={e => this.highlight()} 
            onBlur={e => this.removeHighlight()}
            type="text" 
            className="px-14 ls-1 border-transparent"
            placeholder="Enter your delivery address"
          />
        </div>
        <button 
          className="px-14 ls-1 border-transparent heavy"
          onMouseEnter={e => $(e.target).css({filter: 'brightness(80%)'})}
          onMouseLeave={e => $(e.target).css({filter: 'brightness(100%)'})}
        >
          Find Restaurants
        </button>
      </div>
    );
  }
}