import {HomeTile} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, ImageBackground, SafeAreaView} from 'react-native';
import ApodTile from '../../../assets/images/apod-tile.jpg';
import BgImage from '../../../assets/images/bg-image.png';
import MarsRoverImage from '../../../assets/images/mars-rover-bg.webp';
import {HomeStackNavigationProp, HomeStackRoutes} from './Home.routes';
import {styles} from './Home.styled';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation<HomeStackNavigationProp>();
  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <HomeTile
          title={'Astronomy Picture of the Day'}
          imageSource={Image.resolveAssetSource(ApodTile)}
          onPress={() => navigate(HomeStackRoutes.ApodStack)}
        />
        <HomeTile
          title={'Mars Rover Images'}
          imageSource={Image.resolveAssetSource(MarsRoverImage)}
          onPress={() => navigate(HomeStackRoutes.ApodStack)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
