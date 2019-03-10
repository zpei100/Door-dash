import React, { Component } from 'react';

export default class Info extends Component {
  constructor() {
    super();
    this.keywords = ['days', 'feelings', 'mornings', 'stories', 'moments', 'vibes', 'spirits']
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className="info px-55 w-100 bold">
        <p>Delivering</p>
        <p>good {this.keywords[this.state.index]}</p>
      </div>
    );
  }
}