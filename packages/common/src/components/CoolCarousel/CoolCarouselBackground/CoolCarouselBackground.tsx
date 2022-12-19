import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useCarouselDimension} from '../CoolCarousel.utils';
import {CoolCarouselBackgroundProps} from './CoolCarouseldBackground.props';

const CoolCarouselBackground: React.FC<CoolCarouselBackgroundProps> = ({
  imagesSources,
  carouselScrollX,
}) => {
  const {screenWidth} = useCarouselDimension();

  return (
    <View style={StyleSheet.absoluteFillObject}>
      {imagesSources.map((imageSource, index) => {
        const inputRange = [
          (index - 1) * screenWidth,
          index * screenWidth,
          (index + 1) * screenWidth,
        ];
        const opacity = carouselScrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={imageSource}
            style={[StyleSheet.absoluteFillObject, {opacity}]}
            blurRadius={50}
          />
        );
      })}
    </View>
  );
};

export default CoolCarouselBackground;
