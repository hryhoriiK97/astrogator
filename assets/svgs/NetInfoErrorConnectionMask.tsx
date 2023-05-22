import React, { FC } from "react";
import Svg, {
  Rect,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from "react-native-svg";

interface NetInfoErrorConnectionMask {
  style: SvgProps["style"];
}

export const NetInfoErrorConnectionMask: FC<NetInfoErrorConnectionMask> = ({
  style,
}) => {
  return (
    <Svg height={518} viewBox="0 0 390 518" fill="none" style={style}>
      <Rect width="100%" height={518} fill="url(#paint0_linear_441_50)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_441_50"
          x1={195}
          y1={0}
          x2={195}
          y2={518}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={0.495304} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
