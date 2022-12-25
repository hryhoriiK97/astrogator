import React, {FC} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import ApodBackgroundImage from '../../../assets/images/apod-tile.jpg';
import {styles} from './Apod.styled';

const Apod: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={Image.resolveAssetSource(
          ApodBackgroundImage,
        )}></ImageBackground>
    </View>
  );
};

export default Apod;
