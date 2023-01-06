import {Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {Image, ImageBackground, SafeAreaView} from 'react-native';
import BgImage from '../../../../../assets/images/bg-image.png';
import {AstrogatorColor} from '../../../../theming/theme';
import {styles} from './VideosList.styled';

const VideosListScreen: FC = () => {
  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Typography color={AstrogatorColor.White}>VIDEOS</Typography>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default VideosListScreen;
