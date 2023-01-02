import {Image} from 'react-native';
import {HomeTileProps} from './HomeTile.props';

export const homeTilePropsMock: HomeTileProps = {
  title: 'Astronomy Picture of the Day',
  imageSource: Image.resolveAssetSource(
    require('../../../assets/imgs/space-shuttle.jpeg'),
  ),
  onPress: () => console.log('Pressed'),
};
