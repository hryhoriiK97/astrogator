import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export const Chevron: FC = () => {
  return (
    <Svg width="9" height="14" viewBox="0 0 9 14" fill="none">
      <Path
        d="M2 14L9 7L2 0L0.832646 1.16653L6.66694 7L0.832646 12.8335L2 14Z"
        fill="#CBCBCB"
      />
    </Svg>
  );
};
