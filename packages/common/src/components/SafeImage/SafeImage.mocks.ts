import {SafeImageProps} from './SafeImage.props';

export const safeImagePropsMock: SafeImageProps = {
  source: {
    uri: 'https://apod.nasa.gov/apod/image/2212/J7A6402-Edit-copy-sharpened.jpg',
  },
  defaultSource: require('../../../assets/imgs/space-shuttle.jpeg'),
  linearGradientColors: ['red', 'blue'],
};
