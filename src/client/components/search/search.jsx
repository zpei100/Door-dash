import React, { Component } from 'react';
import Flag from './flag.jsx';
import $ from 'jquery';

export default class Search extends Component {
  highlight() {
    this.search.css({border: '2.5px #80CED7 solid'});
  }

  removeHighlight() {
    this.search.css({border: '2.5px solid transparent'})
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
          style={{display: 'table-cell'}}
        >
          Find Restaurants
        </button>
      </div>
    );
  }
}