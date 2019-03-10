import React, { Component } from 'react';
import ArrowPng from './right-arrow.png';

export default class Discover extends Component {
  render() {
    return (
      <div id="discover">
        <p>Delivering Good: Discover the New DoorDash</p>
        <img src={ArrowPng}/>
      </div>
    );
  }
}