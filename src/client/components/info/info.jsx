import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div className="info px-55 w-100 bold">
        <p>Delivering</p>
        <p id="info-block">
          <span id="info-lw" style={{margin: 0}}>good</span> 
          <span className="info-text"> {this.props.word}</span>
          <span className="next">  {this.props.next}</span>
        </p>
      </div>
    );
  }
}