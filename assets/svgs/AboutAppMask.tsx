import React, { FC } from "react";
import { Dimensions } from "react-native";
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
  Path,
  Rect,
} from "react-native-svg";

interface AboutAppMaskProps {
  style?: SvgProps["style"];
}

console.log(Dimensions.get("screen").height);

const height = Dimensions.get("screen").height;

export const AboutAppMask: FC<AboutAppMaskProps> = ({ style }) => {
  return (
    <Svg height={height < 700 ? 601 : 651} fill="none" style={style}>
      <Rect
        width="100%"
        height={height < 700 ? 601 : 651}
        fill="url(#paint0_linear_414_3571)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_414_3571"
          x1={195}
          y1={0}
          x2={195}
          y2={height < 700 ? 601 : 651}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={0.495304} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
