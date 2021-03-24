import React, {useState, useEffect} from 'react';
import { SVG } from '@svgdotjs/svg.js'

import designers from './designers';

export default function() {
  var draw = SVG('#drawing');//.size(500, 500);
  console.log(draw)
  draw.rect(100,100).animate().fill('#f03').move(100,100)
  // var image = draw.image('./apple.svg');  
  return (
    <div>
      <designers.Apple />
    </div>
  );
}