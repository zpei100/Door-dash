import React, { Component } from 'react';

import Nav from './nav/nav.jsx';
import Hero from './hero/hero.jsx';
import Discover from './discover/discover.jsx';
import Carousel from './carousel/carousel.jsx';
import Order from './order/order.jsx';
import Footer from './footer/footer.jsx';
import Slides from './slides/slides.jsx';

export default ({carouselData}) => (
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