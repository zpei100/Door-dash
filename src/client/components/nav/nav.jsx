import React, { Component } from 'react';
import Button from '../button/button.jsx';

export default class Nav extends Component {
  render() {
    return (
      <div id="nav" className="d-flex">
        <div className="ls-2 px-18 middle logo xheavy">DOORDASH</div>
        <div className="end d-flex">
          <Button text="Sign In"></Button>
          <Button text="Sign Up"></Button>
        </div>
      </div>
    );
  }
}