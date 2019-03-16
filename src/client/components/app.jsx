import React, { Component } from 'react';

import Nav from './nav/nav.jsx';
import Hero from './hero/hero.jsx';
import Discover from './discover/discover.jsx';
import Carousel from './carousel/carousel.jsx';
import Order from './order/order.jsx';
import Footer from './footer/footer.jsx';
import Slides from './slides/slides.jsx';

const carouselData = [
  {
    title: 'FIND YOUR FAVORITES',
    paragraph: 'Satisfy your cravings with a huge selection of restaurants.'
  },
  {
    title: 'EASY ORDERING',
    paragraph: 'Food is just a few taps away. Plus, group ordering makes entertaining a breeze.'
  },
  {
    title: 'REAL-TIME TRACKING',
    paragraph: 'See when your order will arive.'
  }
]

export default () => (
  <React.Fragment>
    <Nav/>
    <Hero />
    <Discover />
    <Slides /> 
    <Carousel carouselData={carouselData}/>
    <Order />
    <Footer />
  </React.Fragment>
)