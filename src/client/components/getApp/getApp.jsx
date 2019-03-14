import React, { Component } from 'react';
import Icon from './icon.jsx';
import Android from './android.svg';
import Apple from './apple.svg';

export default class GetApp extends Component {
  render() {
    return (
      <div className="get-app">
        <span style={{ fontWeight: 600, letterSpacing: '1.5px', display: 'flex', alignItems: 'center', color:this.props.color || 'black'}}>Get the app:</span>
        <Icon src={Apple} {...this.props} />
        <Icon src={Android} {...this.props} />
      </div>
    );
  }
}