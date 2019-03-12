import React, { Component } from 'react';
import Description from './description.jsx';
import Image from './image.jsx';
import Cover from './cover.jsx';

export default class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <Description />
        <Image />
        <Cover />        
      </div>
    );
  }
}