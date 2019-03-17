import React, { Component } from 'react';

export default class ImageSlide extends Component {
  render() {
    const { direction, Image } = this.props;
  
    const leftSlice = 'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)';
    const rightSlice = 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%)';
    const polygon = direction === 'right' ? rightSlice : leftSlice;
    const margin = direction === 'right' ? 'marginLeft' : 'marginRight'
    
    return (
      <img className="image" src={Image} style={{clipPath: polygon, [margin]: 'auto'}}/>
    );
  }
}