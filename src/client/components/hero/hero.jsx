import React, { Component } from 'react';
import $ from 'jquery';

import images from './data';

import Info from '../info/info.jsx';
import Search from '../search/search.jsx';
import GetApp from '../getApp/getApp.jsx';


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
    const $hero = $('#hero');
    const $start = $hero.find('.start');
    
    setInterval(() => {
      const $imageLeft = $hero.find('.left.active');
      const $imageRight = $hero.find('.right.active');
      const $word = $hero.find('.word').first();
      const $nextWord = $hero.find('.next');
      const $description = $('#hero-description .description');

      const pStart = $start.width() + $start.position().left;
      const nextCounter = (this.counter + 2) % images.length;

      //text vanish animation:
      $word.css({opacity: 0, transform: 'translateX(-20%)'});
      $nextWord.css({left: `${pStart}px`, opacity: 1})

      // diagonal slide animations:
      // $imageLeft.css({ clipPath: 'polygon(0% 0%, calc(100vw - 200%) 0%, 0% 100%, 0% 100%' })
      // $imageRight.css({ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, calc(300% - 100vw) 100%)' })

      $imageLeft.addClass('lfade');
      $imageRight.addClass('rfade');

      setTimeout(() => {
        //delete old info text;
        $word.remove();
        $nextWord.removeClass('next');

        // delete old images;
        $imageLeft.remove();
        $imageRight.remove();
        $('.left').addClass('active');
        $('.right').addClass('active');
   
        this.counter++;

        //append new span tag for next info text:
        $description.append(`<span class="word next"> ${images[nextCounter].word}</span> `)
        
        //prepend new images with zindex of 2 after animation is complete;
        $('.images').prepend(`<img class="left" src=${images[nextCounter].left} />`);
        $('.images').prepend(`<img class="right" src=${images[nextCounter].right} />`);
      }, 1400)

    }, 6000)
  }


  render() {
    const { counter } = this;
    const nextCounter = (counter + 1) % images.length;

    return (
      <div id="hero" className="d-flex">
        <div className="description">
          <Info 
            word={images[counter].word} 
            next={images[nextCounter].word} />
          <Search />
        </div>

        <GetApp 
          color="white" 
          bgColor="white" 
          hoverColor="lightgrey"
        />

        <div className="images">
          <img className="left active" src={images[counter].left}/>
          <img className="right active" src={images[counter].right}/>
          <img className="left" src={images[nextCounter].left} />
          <img className="right" src={images[nextCounter].right} />
        </div>
      </div>
    );
  }
}