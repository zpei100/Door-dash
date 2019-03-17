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

    //animation throttle;
    const wait = 10;

    //animation starts when 40% of container is visible;
    //animation ends when 100% of container is visible; 
    const animationStart = 0.4;
    const animationEnd = 1; 

    const startView = 1 - animationStart; 
    const endView = 1 - animationEnd;

    let time = new Date();

    $window.scroll(function() {
      if(new Date() - time > wait) {
        time = new Date();
        //pContainer must be defined here; due to main.css occuring after js;
        const pContainer = $container.position().top;

        const pWindow = $window.scrollTop();
        const pDiff = pContainer - pWindow;
        const pPercentage = pDiff / $container.height();

        const sign = direction === 'right' ? '+' : '-';

        if(pPercentage > startView) $cover.css({transform: 'translateX(0%)'});
        else if(pPercentage < endView) $cover.css({transform: `translateX(${sign}100%)`});
        else {
          const percentageShown =  100 * (pPercentage - startView) / (endView - startView);
          $cover.css({transform: `translateX(${sign + percentageShown}%)`})
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