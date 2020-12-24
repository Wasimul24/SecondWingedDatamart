import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from '/Button.js';
import Tooltips from '/Tooltip.js';
import Navs from '/Nav.js';
ReactDOM.render(
  <>
  <Navs/>
  <Buttons/>
  <Tooltips/>
  </>,
  document.getElementById('root')
);