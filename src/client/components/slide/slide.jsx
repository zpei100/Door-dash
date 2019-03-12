import React, { Component } from 'react';
import Description from './description.jsx';
import ImageSlide from './imageSlide.jsx';
import Cover from './cover.jsx';

export default class Slide extends Component {
  componentDidMount() {
    const $container = this.container;
    const $cover = $container.find('.slide-cover');
    const $window = $(window);

    const pContainer = $container.position().top;
    
    const wait = 15;
    let right = '0%';
    let time = new Date();

    const startView = 0.6;
    const endView = 0;

    $window.scroll(function() {
      if(new Date() - time > wait) {
        time = new Date();
        const pWindow = $window.scrollTop();
        const pDiff = pContainer - pWindow;
        const pPercentage = pDiff / $container.height();

        if(pPercentage > startView) $cover.css({right: '0%'});
        else if(pPercentage < endView) $cover.css({right: '-60%'});
        else {
          const percentageShown = -0.6/(endView - startView) * (pPercentage - startView) * 100;
          $cover.css({right: `${percentageShown}%`})
        }
      }
    })

    // $(window).scroll(function() {
    //   if(new Date() - time > wait) {
    //     time = new Date();
    //     const pWindow = $(this).scrollTop();
    //     const pDiff = pContainer - pWindow;
    //     const percentageDiff = pDiff / container.height();

    //     console.log(percentageDiff)

    //     if(percentageDiff > 0.5) right = '0%';
    //     else if(percentageDiff < -0.25) right = '-50%';
    //     else right = `${((2*(percentageDiff+0.25))/3-0.5)*100}%`
        
    //     cover.css({right})
    //   }
    // })
  }

  render() {
    return (
      <div ref={e => this.container = $(e)} className="slide">
        <Description {...this.props}/>
        <ImageSlide />
        <Cover />
      </div>
    );
  }
}