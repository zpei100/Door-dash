import React, { Component } from 'react';
import $ from 'jquery';
import Caption from './caption.jsx';

import Image1 from './images/carousel-image-1.jpg';
import Image2 from './images/carousel-image-2.jpg';
import Image3 from './images/carousel-image-3.jpg';
import Iphone from './images/iphone.jpg';
import Data from './data';

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {active: 1}
    this.slide = this.slide.bind(this);
  }

  componentDidMount() {
    const cp = $('#button-float').offset().left;
    const move = $(`.indicator-button:nth-child(1)`).offset().left - cp - 30;
    $('#button-float').css({transform: `translateX(${move}px)`});
    this.floatPosition = move;
  }

  slide(e, id) {
    this.setState({active: id});
    const $carouselInner = $('.carousel-inner');
    
    $carouselInner.find('.active').removeClass('active');
    $(`.carousel-item:nth-child(${id})`).addClass('active')

    const move = $(`.indicator-button:nth-child(${id})`).offset().left - $(`.indicator-button:nth-child(1)`).offset().left

    $('#button-float').css({transform: `translateX(${move + this.floatPosition}px)`})
  }

  render() {
    const {title, paragraph} = Data[this.state.active - 1]
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
          <img src={Iphone} style={{position: 'absolute', width: '275px', transform: 'translateX(2px) translateY(-65px)', zIndex: -1}} />
          <div ref={e => this.carousel = $(e)} id="carousel" className="carousel slide carousel-fade" style={{width: '234px'}}>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{width: '100%'}}>
                <img src={Image1} style={{objectFit: 'cover', width: '100%'}}/>
              </div>
              <div className="carousel-item" style={{width: '100%'}}>
                <img src={Image2} style={{objectFit: 'cover', width: '100%'}}/>
              </div>
              <div className="carousel-item" style={{width: '100%'}}>
                <img src={Image3} style={{objectFit: 'cover', width: '100%'}}/>
              </div>
            </div>
          </div>  
        </div>
        
        <div style={{width: '35%', margin: 'auto', alignItems: 'center'}}>
          <hr style={{marginTop: 0}}/>  
          <div id="captions">
            <Caption title={title} paragraph={paragraph}/>
          </div>

          <div id="indicator-buttons" style={{display: 'flex', justifyContent: 'center', position: 'relative'}} >
            <button className="indicator-button" onClick={e => this.slide(e, 1)}></button>
            <button className="indicator-button" onClick={e => this.slide(e, 2)}></button>
            <button className="indicator-button" onClick={e => this.slide(e, 3)}></button>
            <span id="button-float" className="indicator-button"></span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

/*

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
</div>


*/