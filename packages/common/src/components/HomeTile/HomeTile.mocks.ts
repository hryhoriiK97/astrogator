import {Image} from 'react-native';
import {HomeTileProps} from './HomeTile.props';

export const homeTilePropsMock: HomeTileProps = {
  title: 'APOD',
  headerTitle: 'Astronomy Picture of the Day',
  imageSource: Image.resolveAssetSource(
    require('../../../assets/imgs/space-shuttle.webp'),
  ),
  onPress: () => console.log('Pressed'),
};
