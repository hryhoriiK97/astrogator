import {Image} from 'react-native';
import {CoolCarouselProps} from './CoolCarousel.props';

export const coolCarouselMocks: CoolCarouselProps = {
  imagesSources: [
    {
      uri: 'https://cdn.dribbble.com/users/3281732/screenshots/12371951/media/8fa22ed541cb6eeaac5b866221e4e0f6.jpg',
    },
    {
      uri: 'https://cdn.dribbble.com/users/3281732/screenshots/7981469/media/de8fd4f9dcc7d2082e0b931f0736f57a.jpg',
    },
    {
      uri: 'https://cdn.dribbble.com/users/3281732/screenshots/7863160/media/41dbc3de6db6e99e605c77d0a2e3ee4a.jpg',
    },
    {
      uri: 'https://cdn.dribbble.com/users/3281732/screenshots/12320843/media/c8576b4c95212c3c03251400300ea5d3.jpg',
    },
    {
      uri: 'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg',
    },
  ],
  defaultSource: Image.resolveAssetSource(
    require('../../../assets/imgs/space-shuttle.webp'),
  ),
};
