import React from "react";
import Svg, { Polygon } from "react-native-svg";
import { getRelativeUnits } from "../../src/utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const TopArrow = () => (
  <Svg width={24 * bp} height={24 * bp} viewBox="0 0 24 24">
    <Polygon
      fill={"#ffffff"}
      rotation={"90"}
      origin="12, 12"
      points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13"
    />
  </Svg>
);
