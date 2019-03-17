import React, { Component } from 'react';
import Icon from './icon.jsx';
import Android from './android.svg';
import Apple from './apple.svg';

export default (props) => (
  <div className="get-app">
    <span className="title" style={{color: props.color}}>Get the app:</span>
    <Icon src={Apple} {...props} />
    <Icon src={Android} {...props} />
  </div>
);