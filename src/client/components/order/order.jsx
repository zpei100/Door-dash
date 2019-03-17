import React, { Component } from 'react';
import Search from '../search/search.jsx';
import GetApp from '../getApp/getApp.jsx';

export default () => (
  <div id="order">
    <p className="title">Ready to order?</p> 
    <Search />
    <GetApp bgColor="white" hoverColor="lightgrey"/>
  </div>
)