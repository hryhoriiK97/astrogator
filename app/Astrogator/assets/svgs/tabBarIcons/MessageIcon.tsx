import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export const MessageIcon: FC = () => {
  return (
    <Svg width="24" height="20" viewBox="0 0 24 20" fill="white">
      <Path
        d="M1 5.11112L10.6441 11.5405C11.4652 12.0879 12.5348 12.0879 13.3559 11.5405L23 5.11112M3.44444 18.5556H20.5556C21.9056 18.5556 23 17.4612 23 16.1111V3.8889C23 2.53887 21.9056 1.44446 20.5556 1.44446H3.44444C2.09442 1.44446 1 2.53887 1 3.8889V16.1111C1 17.4612 2.09441 18.5556 3.44444 18.5556Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
