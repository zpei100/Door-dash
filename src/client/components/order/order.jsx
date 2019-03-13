import React, { Component } from 'react';
import Search from '../search/search.jsx';
import Android from './android.svg';
import Apple from './apple.svg';

export default class Order extends Component {
  render() {
    return (
      <div id="order">
        <p className="order-title">Ready to order?</p> 
        <Search style={{margin: '10%'}}/>
        <div className="get-app">
          <span className="description">Get the app:</span>
          <span><img src={Apple} style={{height: '22px', width: '22px'}} /></span>
          <span><img src={Android} style={{height: '25px', width: '25px'}} /></span>
        </div>
      </div>
    );
  }
}