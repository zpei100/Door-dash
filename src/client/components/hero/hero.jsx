import React, { Component } from 'react';
import Info from '../info/info.jsx';
import Search from '../search/search.jsx';

import Artisian from './images/artisian.jpg';
import Bread from './images/bread.jpg';
import BurgerBoard from './images/burgerBoard.jpg';
import Burgers from './images/burgers.jpg';
import ColorBread from './images/colorBread.jpg';
import Dessert from './images/dessert.jpg';
import Fancy from './images/fancy.jpg';
import GreenCake from './images/greenCake.jpg';
import ChocolatePancake from './images/chocolatePancake.jpg';
import MixPlate from './images/mixPlate.jpg';
import Plate from './images/plate.jpg';
// import Salad from './images/salad.jpg';
import Shell from './images/shell.jpg';
import Spaghetti from './images/spaghetti.jpg';
import StrawberryWaffle from './images/strawberryWaffle.jpg';
import Taco from './images/taco.jpg';
import Toast from './images/toast.jpg';
import Waffle from './images/waffle.jpg';
import Walnut from './images/walnut.jpg';

import $ from 'jquery';

const images = [
  {left: Taco, right: Waffle},
  {left: Toast, right: BurgerBoard},
  {left: Fancy, right: GreenCake},
  {left: Plate, right: ColorBread},
]

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {active: 0}
    this.counter = 0;
    this.keywords = ['days', 'feelings', 'mornings', 'stories']
  }

  componentDidMount() {

    // 700 ms is the animation time
    // 3000 ms is cycle time
    // unable to to this via set state for now, since changes to clip path is permanent and affects the same image, even when the src is changed; The hack is the remove it out of the DOM and prepend new ones.

    // this defeats the purpose of using React, and must be fixed later

    const $lw = $('#info-lw');

    setInterval(() => {
      const $imageLeft = $('#hero .active-left');
      const $imageRight = $('#hero .active-right');
      const $infoText = $('.info-text');
      const $infoTextNext = $('.next');
      const lw = $lw.width() + $lw.position().left;

      //text vanish animation:
      $infoText.css({opacity: 0, transform: 'translateX(-20%)'});
      $infoTextNext.css({left: `${lw}px`, opacity: 1})

      // diagonal slide animations:
      $imageLeft.css({
        clipPath: 'polygon(0% 0%, calc(100vw - 200%) 0%, 0% 100%, 0% 100%'
      })

      $imageRight.css({
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, calc(300% - 100vw) 100%)'
      })

      setTimeout(() => {
        //delete old info text;
        $infoText.remove();
        $infoTextNext.removeClass('next').addClass('info-text');

        //delete old images
        $imageLeft.remove();
        $imageRight.remove();
        $('.image-left').addClass('active-left').css({zIndex: -1});
        $('.image-right').addClass('active-right').css({zIndex: -1});

        this.counter++;

        //append new span tag for next info text:
        $('#info-block').append(`
          <span class="next"> &nbsp; ${this.keywords[(this.counter+1)%images.length]}</span> 
        `)
        
        //prepend new images with zindex of 2 after animation is complete;
        $('#hero').prepend(`<img class="hero-image image-left" src=${images[(this.counter+1)%images.length].left} style="z-index: -2" />`);

        $('#hero').prepend(`<img class="hero-image image-right" src=${images[(this.counter+1)%images.length].right} style="z-index: -2" />`);

      }, 700)
    }, 6000)
  }


  render() {
    return (
      <div id="hero" className="d-flex">
        <div id="hero-description" className="middle w-100">
          <Info word={this.keywords[this.counter]} next={this.keywords[(this.counter+1)%images.length]}></Info>
          <Search></Search>
        </div>
        <img className="hero-image image-left active-left" src={images[this.counter].left}/>
        <img className="hero-image image-right active-right" src={images[this.counter].right}/>
        <img className="hero-image image-left" src={images[(this.counter+1)%images.length].left} style={{zIndex: -2}}/>
        <img className="hero-image image-right" src={images[(this.counter+1)%images.length].right} style={{zIndex: -2}}/>
      </div>
    );
  }
}