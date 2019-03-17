import React, { Component } from 'react';
import Column from './column.jsx';
import footerData from './data';

export default () => (
  <div id="footer">
    <div>
      <div className="footer-top">
        {
          footerData.top.map(({title, list}) => 
            <Column title={title} list={list} />)
        }
      </div> 
      <div className="footer-mid"></div>
      <div className="fotter-bot"></div>
    </div>
  </div>
)
    