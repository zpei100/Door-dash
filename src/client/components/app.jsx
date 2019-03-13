import React, { Component } from 'react';
import $ from 'jquery';

import Nav from './nav/nav.jsx';
import Hero from './hero/hero.jsx';
import Discover from './discover/discover.jsx';
import Slide from './slide/slide.jsx';
import Carousel from './carousel/carousel.jsx';
import Order from './order/order.jsx';
import Footer from './footer/footer.jsx';

import Image1 from './assets/images/imageSlide01.jpg';
import Image2 from './assets/images/imageSlide02.jpg';
import Image3 from './assets/images/imageSlide03.jpg';

window.$ = $;

export default class App extends Component {
  constructor() {
    super();
    this.carouselData = [
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
        paragraph: 'See when y our order will arive.'
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Nav/>
        <Hero />
        <Discover />
        <Slide 
          title="Satisfy your cravings" 
          paragraph="Experience a world of food, with your favorite restaurants at your fingertips." 
          linkText="I'm ready to eat"
          direction="right"
          color="#009494"
          Image={Image1}
        />

        <Slide 
          title="Anywhere you are" 
          paragraph="A family picnic in the park. Your date night at home. That late-night study session. Spend more time doing the things that matter to you most -- we'll take care of the rest." 
          linkText="Let's go"
          direction="left"
          color="#B28B84"
          Image={Image2}
        />

        <Slide 
          title="We're here for you" 
          paragraph="Making your life easier is our top priority. Five-star service gets you what you need, right when you need it." 
          linkText="Get started"
          direction="right"
          color="#009494"
          Image={Image3}
        />

        <Carousel carouselData={this.carouselData}/>
        <Order />
        <Footer />
      </React.Fragment>
    );
  }
}