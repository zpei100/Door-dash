import React from 'react';

import BurgerBoard from './images/burgerBoard.jpg';
import ColorBread from './images/colorBread.jpg';
import Fancy from './images/fancy.jpg';
import GreenCake from './images/greenCake.jpg';
import Plate from './images/plate.jpg';
import Taco from './images/taco.jpg';
import Toast from './images/toast.jpg';
import Waffle from './images/waffle.jpg';

/* unused images:
  import Bread from './images/bread.jpg';
  import Burgers from './images/burgers.jpg';
  import Dessert from './images/dessert.jpg';
  import MixPlate from './images/mixPlate.jpg';
  import Walnut from './images/walnut.jpg';
  import Spaghetti from './images/spaghetti.jpg';
  import Shell from './images/shell.jpg';
  import ChocolatePancake from './images/chocolatePancake.jpg';
  import Artisian from './images/artisian.jpg';
  import StrawberryWaffle from './images/strawberryWaffle.jpg';
*/

//ordered by order of appearance
export default [
  {left: Taco, right: Waffle},
  {left: Toast, right: BurgerBoard},
  {left: Fancy, right: GreenCake},
  {left: Plate, right: ColorBread},
]