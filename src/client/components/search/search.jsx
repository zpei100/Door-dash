import React, { Component } from 'react';
import Flag from './flag.jsx';

export default class Search extends Component {
  render() {
    return (
      <div className="search w-auto o-hidden">
        <div className="h-100">
          <span className="p-2"><Flag/></span>
          <input 
            type="text" 
            className="px-14 ls-1 border-transparent"
            placeholder="Enter your delivery address"
          />
        </div>
        <button 
          className="px-14 ls-1 border-transparent heavy"
        >
          Find Restaurants
        </button>
      </div>
    );
  }
}