import React, { Component } from 'react';
import Button from '../button/button.jsx';

export default class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <div className="logo">DOORDASH</div>
        <div className="buttons">
          <Button text="Sign In"></Button>
          <Button text="Sign Up"></Button>
        </div>
      </div>
    );
  }
}