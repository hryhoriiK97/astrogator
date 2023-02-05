import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export const DatePickerIcon: FC = () => {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <Path
        d="M16 20H2C0.89543 20 0 19.1046 0 18V4C0 2.89543 0.89543 2 2 2H4V0H6V2H12V0H14V2H16C17.1046 2 18 2.89543 18 4V18C18 19.1046 17.1046 20 16 20ZM2 8V18H16V8H2ZM2 4V6H16V4H2ZM10 16H4V10H10V16Z"
        fill="#E1E1E1"
        fill-opacity="0.88"
      />
    </Svg>
  );
};