import React, { Component } from 'react';
import Nav from './nav/nav.jsx';
import Hero from './hero/hero.jsx';
import Discover from './discover/discover.jsx';
import Slide from './slide/slide.jsx';
import $ from 'jquery';

window.$ = $;

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav/>
        <Hero />
        <Discover />
        <Slide 
          title="Satisfy your cravings" 
          paragraph="Experience a world of food, with your favorite restaurants at your fingertips." 
          linkText="I'm ready to eat"/>
      </React.Fragment>
    );
  }
}