import React, { Component } from 'react';
import Description from './description.jsx';
import ImageSlide from './imageSlide.jsx';
import Cover from './cover.jsx';

export default class Slide extends Component {
  componentDidMount() {
    const container = this.container;
    const pContainer = container.position().top;
    const cover = this.container.find('.slide-cover');
    const wait = 20;
    let right = '0%';
    let time = new Date();

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
        {/* <Cover /> */}
      </div>
    );
  }
}