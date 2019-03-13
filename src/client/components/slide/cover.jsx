import React, { Component } from 'react';

export default class Cover extends Component {
  render() {
    const { direction } = this.props;
    const style = {[direction]: '0%'}

    return (
      <div className="slide-cover" style={style} />
    );
  }
}