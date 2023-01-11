import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface FavouriteIconProps {
  fillColor: SvgProps['fill'];
}

export const FavouriteIcon: FC<FavouriteIconProps> = ({fillColor}) => {
  return (
    <Svg width="16" height="20" viewBox="0 0 16 20" fill={fillColor}>
      <Path
        d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V19L8 15.5L1 19V3Z"
        stroke={fillColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
