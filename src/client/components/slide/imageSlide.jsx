import React, { Component } from 'react';
import Image from '../assets/images/imageSlide01.jpg';

export default class ImageSlide extends Component {
  render() {
    return (
      <img className="slide-image" src={Image}/>
    );
  }
}