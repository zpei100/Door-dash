import React, { Component } from 'react';
import $ from 'jquery';

import images from './data';

import Info from '../info/info.jsx';
import Search from '../search/search.jsx';
import GetApp from '../getApp/getApp.jsx';

window.$ = $;

export default class Hero extends Component {
  constructor() {
    super();
    this.counter = 0;
  }

  componentDidMount() {
    // 700 ms is the animation time
    // 3000 ms is cycle time
    // unable to to this via set state for now, since changes to clip path is permanent and affects the same image, even when the src is changed; The hack is the remove it out of the DOM and prepend new ones.

    // this defeats the purpose of using React, and must be fixed later

    const $start = $('.start');
    const $hero = $('#hero');

    setInterval(() => {
      const $imageLeft = $('.left.active');
      const $imageRight = $('.right.active');
      const $word = $('.word').first();
      const $nextWord = $('.next');
      const pStart = $start.width() + $start.position().left;
      const $description = $('#hero-description .description');

      //text vanish animation:
      $word.css({opacity: 0, transform: 'translateX(-20%)'});
      $nextWord.css({left: `${pStart}px`, opacity: 1})

      // diagonal slide animations:
      $imageLeft.css({
        clipPath: 'polygon(0% 0%, calc(100vw - 200%) 0%, 0% 100%, 0% 100%'
      })

      $imageRight.css({
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, calc(300% - 100vw) 100%)'
      })

      setTimeout(() => {
        //delete old info text;
        $word.remove();
        $nextWord.removeClass('next');

        //delete old images
        $imageLeft.remove();
        $imageRight.remove();
        
        $('.left').addClass('active');
        $('.right').addClass('active');
   
        this.counter++;
        //append new span tag for next info text:
        $description.append(`
          <span class="word next"> ${images[(this.counter+1)%images.length].word}</span> 
        `)
        
        //prepend new images with zindex of 2 after animation is complete;
        $('.images').prepend(`<img class="left" src=${images[(this.counter+1)%images.length].left} />`);

        $('.images').prepend(`<img class="right" src=${images[(this.counter+1)%images.length].right} />`);

      }, 700)
    }, 6000)
  }


  render() {
    return (
      <div id="hero" className="d-flex">
        <div className="description">
          <Info 
            word={images[this.counter].word} 
            next={images[(this.counter+1)%images.length].word} />
          <Search />
        </div>

        <GetApp 
          color="white" 
          bgColor="white" 
          hoverColor="lightgrey"
        />

        <div className="images">
          <img className="left active" src={images[this.counter].left}/>
          <img className="right active" src={images[this.counter].right}/>
          <img className="left" src={images[(this.counter+1)%images.length].left} />
          <img className="right" src={images[(this.counter+1)%images.length].right} />
        </div>
      </div>
    );
  }
}