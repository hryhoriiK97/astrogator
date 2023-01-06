import {MarsRoverItemProps} from './MarsRoverItem.props';

export const marsRoverItemPropsMock: MarsRoverItemProps = {
  name: 'Spirit',
  imageSource: require('../../../assets/imgs/mars-rover.webp'),
  onPress: () => console.log('onPress is pressed'),
  onLongPress: () => console.log('onLongPress is pressed'),
};
