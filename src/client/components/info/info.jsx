import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div id="hero-description" className="px-55 w-100 bold">
        <p>Delivering</p>
        <p className="description">
          <span className="start" style={{margin: 0}}>good</span> 
          <span className="word"> {this.props.word}</span>
          <span className="word next">  {this.props.next}</span>
        </p>
      </div>
    );
  }
}