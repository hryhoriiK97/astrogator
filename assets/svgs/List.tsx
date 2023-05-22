import React, { FC } from "react";
import { Svg, Path } from "react-native-svg";

export const List: FC = () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M14 14H8V8H14V14ZM6 14H0V8H6V14ZM14 6H8V0H14V6ZM6 6H0V0H6V6Z"
        fill="white"
      />
    </Svg>
  );
};
