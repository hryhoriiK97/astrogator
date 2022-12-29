import {SpaceMono, Typography} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, ImageBackground, Pressable} from 'react-native';
import ApodTile from '../../../assets/images/apod-tile.jpg';
import {
  HomeStackNavigationProp,
  HomeStackRoutes,
} from '../../stacks/Home/Home.routes';
import {styles} from './Apod.styled';

const Apod: FC = () => {
  const {navigate} = useNavigation<HomeStackNavigationProp>();
  return (
    <Pressable
      onPress={() => navigate(HomeStackRoutes.ApodStack)}
      style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.image}
        source={Image.resolveAssetSource(ApodTile)}>
        <Typography variant={SpaceMono.Bold} style={styles.title}>
          Astronomy Picture of the Day
        </Typography>
      </ImageBackground>
    </Pressable>
  );
};

export default Apod;
