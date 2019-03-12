import React, { Component } from 'react';
import Image from '../assets/images/imageSlide01.jpg';

export default class ImageSlide extends Component {
  render() {
    return (
      <div className="slide-image">
        <img src={Image}/>
      </div>
    );
  }
}