import {MarsRoverWidgetProps} from './MarsRoverWidget.props';

export const marsRoverWidgetPropsMock: MarsRoverWidgetProps = {
  name: 'Spirit',
  imageSource: require('../../../assets/imgs/mars-rover.webp'),
  onPress: () => console.log('onPress is pressed'),
  onLongPress: () => console.log('onLongPress is pressed'),
};
