import {Animated, ImageProps} from 'react-native';

export type CoolCarouselBackgroundProps = {
  imagesSources: ImageProps['source'][];
  carouselScrollX: Animated.Value;
};
