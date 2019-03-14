import React, { Component } from 'react';
import $ from 'jquery';

export default class Icon extends Component {
  constructor() {
    super();
    this.highlightBg = this.highlightBg.bind(this);
    this.removeHighlight = this.removeHighlight.bind(this);
  }

  highlightBg() {
    this.icon.css({background: this.props.hoverColor});
    this.icon.find('img').css({background: this.props.hoverColor})
  }

  removeHighlight() {
    this.icon.css({background: this.props.bgColor});
    this.icon.find('img').css({background: this.props.bgColor})
  }

  render() {
    const { bgColor, src } = this.props;

    return (
      <span 
        style={{borderRadius: '50%', padding: '10px', cursor: 'pointer', background: bgColor, display: 'flex', alignItems: 'center'}}
        ref={e => this.icon = $(e)}
        onMouseEnter={this.highlightBg} 
        onMouseLeave={this.removeHighlight}
      >
        <img 
          src={src} 
          style={{height: '22px', width: '22px', background: bgColor}} />
      </span>
    );
  }
}
