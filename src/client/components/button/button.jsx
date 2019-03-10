import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {text} = this.props;
    return (
      <button 
        className="border-transparent p-5 size-2 round-4 m-3 heavy ls-1"
      >
        {text} 
      </button>
    );
  }
}