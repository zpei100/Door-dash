import React, { Component } from 'react';
import Search from '../search/search.jsx';
import GetApp from '../getApp/getApp.jsx';

export default class Order extends Component {
  render() {
    return (
      <div id="order">
        <p className="order-title">Ready to order?</p> 
        <Search style={{margin: '10%'}}/>
        <GetApp bgColor="white" hoverColor="lightgrey"/>
      </div>
    );
  }
}