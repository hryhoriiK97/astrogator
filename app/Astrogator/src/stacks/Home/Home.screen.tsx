import React, {FC} from 'react';
import {Image, ImageBackground, SafeAreaView} from 'react-native';
import BgImage from '../../../assets/images/bg-image.png';
import {Apod} from '../../components/Apod';
import {styles} from './Home.styled';

const HomeScreen: FC = () => {
  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Apod />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
