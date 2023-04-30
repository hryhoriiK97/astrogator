import { getRelativeUnits } from "../../src/utils/getRelativeUnits";
import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const { bp } = getRelativeUnits();

type ArrowProps = {
  fillColor?: SvgProps["fill"];
  width?: SvgProps["width"];
  height?: SvgProps["height"];
};

export const Arrow: React.FC<ArrowProps> = ({
  fillColor = "#ffffff",
  width = 18 * bp,
  height = 22 * bp,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 22">
    <Path
      fill={fillColor}
      d="M10.3306154,0.9855 L0.966807692,9.97546154 C0.439269231,10.4811923 0.439269231,11.3254615 0.966807692,11.8332692 L10.3306154,20.8211538 C10.9048846,21.3725769 11.8114615,21.3725769 12.3857308,20.8211538 C12.9932308,20.2375385 12.9932308,19.2655385 12.3857308,18.6808846 L4.54326923,11.1520385 C4.401,11.016 4.401,10.7906538 4.54326923,10.6546154 L12.3857308,3.12576923 C12.9932308,2.54215385 12.9932308,1.57015385 12.3857308,0.9855 C12.0980769,0.711346154 11.7283846,0.573230769 11.3586923,0.573230769 C10.9879615,0.573230769 10.6182692,0.711346154 10.3306154,0.9855 Z"
    />
  </Svg>
);
