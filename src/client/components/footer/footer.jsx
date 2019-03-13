import React, { Component } from 'react';
import Column from './column.jsx';

export default class Footer extends Component {
  render() {
    const footerData = {
      top: [
        {
          title: 'Northern California',
          list: ['Berkely', 'Palo Alto', 'Oakland', 'San Francisco', 'San Jose', 'See More...']
        },
        {
          title: 'Southern California',
          list: ['Irvine', 'Los Angeles', 'Pasadena', 'San Diego', 'Venice', 'See More...']
        },
        {
          title: 'Seattle',
          list: ['Bellevue', 'Kenmore', 'Seattle', 'Redmond', 'Renton', 'See More...']
        },
        {
          title: 'Minneapolis',
          list: ['Bloomington', 'Maplewood', 'Minneapolis', 'Minnetonka', 'St.Paul', 'See More...']
        },
        {
          title: 'Other Cities',
          list: ['Atlanta', 'Boston', 'Brooklyn', 'Chicago', 'Dallas', 'Houston', 'Indianapolis', 'Manhattan', 'New York City', 'Pheonix', 'Washington DC', 'See More...']
        }
      ]
    }

    return (
      <div id="footer">
        <div style={{width: '65%', margin: 'auto'}}>
          <div className="footer-top">
            {footerData.top.map(({title, list}) => <Column title={title} list={list} />)}
          </div> 
          <div className="footer-mid"></div>
          <div className="fotter-bot"></div>
        </div>
      </div>
    );
  }
}