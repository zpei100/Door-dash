import React, { Component } from 'react';
import $ from 'jquery';
import Caption from './caption.jsx';
import Image from './image.jsx';
import IndicatorButton from './indicatorButton.jsx';

import Iphone from './images/iphone.jpg';
import data from './data';

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = { active: 1 }
    this.slide = this.slide.bind(this);
  }

  componentDidMount() {
    //moves button float to where it should be, but breaks when screen size adjusts;
    this.carousel.find('.carousel-item').first().addClass('active');
    const cp = $('.button-float').offset().left;
    const move = $(`.indicator-button:nth-child(1)`).offset().left - cp - 30;
    $('.button-float').css({transform: `translateX(${move}px)`});
    this.floatPosition = move;
  }

  slide(e, id) {
    this.setState({active: id});
    const $carouselInner = $('.carousel-inner');
    
    $carouselInner.find('.active').removeClass('active');
    $(`.carousel-item:nth-child(${id})`).addClass('active')

    const move = $(`.indicator-button:nth-child(${id})`).offset().left - $(`.indicator-button`).first().offset().left

    $('.button-float').css({transform: `translateX(${move + this.floatPosition}px)`})
  }

  render() {
    const {title, paragraph} = data[this.state.active - 1]
    const style = {
      caption: {
        position: 'absolute',

      },
      indicators: {
        position: 'absolute',
      }
    }
    return (
      <React.Fragment>
        <p className="carousel-title">How it works</p>
        <div id="carousel-container">
          <img src={Iphone} />
          <div ref={e => this.carousel = $(e)} className="carousel slide carousel-fade">
            <div className="carousel-inner">
              {data.map(({src}) => <Image src={src} />)}
            </div>
          </div>  
        </div>
        
        <div id="captions-container">
          <hr/>  
          <div className="captions">
            <Caption title={title} paragraph={paragraph}/>
          </div>

          <div className="indicator-buttons">
            {[1,2,3].map(idx => 
              <IndicatorButton idx={idx} handleClick={this.slide} 
            />)}
            <span className="button-float indicator-button"></span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}