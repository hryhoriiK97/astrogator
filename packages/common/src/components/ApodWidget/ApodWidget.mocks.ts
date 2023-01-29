import {ApodWidgetProps} from './ApodWidget.props';

export const apodWidgetPropsMock: ApodWidgetProps = {
  imageSource: {
    uri: 'https://apod.nasa.gov/apod/image/2301/MoonEnhanced_Mirza_4085.jpg',
  },
  title: 'Moon Enhanced',
  author: 'Darya Kawa Mirza',
  date: '2023-01-16',
  defaultSource: require('../../../assets/imgs/space-shuttle.webp'),
  onPress: () => console.log('PRESS'),
};
