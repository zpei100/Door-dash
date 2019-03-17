import React, { Component } from 'react';
import Description from './description.jsx';
import ImageSlide from './imageSlide.jsx';
import Cover from './cover.jsx';
import $ from 'jquery';

export default class Slide extends Component {
  componentDidMount() {
    const { direction } = this.props;
    const $container = this.container;
    const $cover = $container.find('.cover');
    const $window = $(window);
    const wait = 15;
    const startView = 0.6;
    const endView = 0;

    let time = new Date();

    $window.scroll(function() {
      if(new Date() - time > wait) {
        time = new Date();
        //pContainer must be defined here; due to main.css occuring after js;
        const pContainer = $container.position().top;

        const pWindow = $window.scrollTop();
        const pDiff = pContainer - pWindow;
        const pPercentage = pDiff / $container.height();

        if(pPercentage > startView) $cover.css({[direction]: '0%'});
        else if(pPercentage < endView) $cover.css({[direction]: '-60%'});
        else {
          const percentageShown = -0.6/(endView - startView) * (pPercentage - startView) * 100;
          $cover.css({[direction]: `${percentageShown}%`})
        }
      }
    })
  }

  render() {
    const { direction } = this.props;
    return (
      <div 
        ref={e => this.container = $(e)} 
        style={{flexDirection: direction === 'right' ? 'row' : 'row-reverse'}}
        className="polygon-slide"
      >
        <Description {...this.props} />
        <ImageSlide {...this.props} />
        <Cover direction={direction} />
      </div>
    );
  }
}