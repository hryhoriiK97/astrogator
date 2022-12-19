import {Dimensions} from 'react-native';

type UseCarouselDimension = {
  screenWidth: number;
  screenHeight: number;
  imageWidth: number;
  imageHeight: number;
};

export const useCarouselDimension = (): UseCarouselDimension => {
  const {width, height} = Dimensions.get('screen');

  const imageWidth = width * 0.7;
  const imageHeight = imageWidth * 1.54;

  return {
    screenWidth: width,
    screenHeight: height,
    imageWidth,
    imageHeight,
  };
};
