import React from 'react';
import Slide from '../slide/slide.jsx';

import Image1 from '../assets/images/imageSlide01.jpg';
import Image2 from '../assets/images/imageSlide02.jpg';
import Image3 from '../assets/images/imageSlide03.jpg';

const teal = "#009494"
const brown = "#B28B84"

//need to figure how to modularize this code, when Images are imported from local files;
export default () => (
  <React.Fragment>
    <Slide 
      title="Satisfy your cravings" 
      paragraph="Experience a world of food, with your favorite restaurants at your fingertips." 
      linkText="I'm ready to eat"
      direction="right"
      color={teal}
      Image={Image1}
    />

    <Slide 
      title="Anywhere you are" 
      paragraph="A family picnic in the park. Your date night at home. That late-night study session. Spend more time doing the things that matter to you most -- we'll take care of the rest." 
      linkText="Let's go"
      direction="left"
      color={brown}
      Image={Image2}
    />

    <Slide 
      title="We're here for you" 
      paragraph="Making your life easier is our top priority. Five-star service gets you what you need, right when you need it." 
      linkText="Get started"
      direction="right"
      color={teal}
      Image={Image3}
    />
  </React.Fragment>
)