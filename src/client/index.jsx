import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/app.jsx'

import data  from './appData';
const {carouselData} = data;

ReactDOM.render(<App carouselData={carouselData}/>, document.getElementById('app'))