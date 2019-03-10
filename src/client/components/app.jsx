import React, { Component } from 'react';
import Nav from './nav/nav.jsx';
import Hero from './hero/hero.jsx';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav/>
        <Hero />
      </React.Fragment>
    );
  }
}