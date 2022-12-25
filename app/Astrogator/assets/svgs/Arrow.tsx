import {getRelativeUnits} from '@astrogator/common';
import React from 'react';
import Svg, {Polygon} from 'react-native-svg';

const {bp} = getRelativeUnits();

export const Arrow = () => (
  <Svg
    width={24 * bp}
    height={24 * bp}
    style={{transform: [{rotate: '-90deg'}]}}
    viewBox="0 0 24 24">
    <Polygon
      fill={'#ffffff'}
      rotation={'90'}
      origin="12, 12"
      points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13"
    />
  </Svg>
);
