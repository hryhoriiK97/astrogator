import {Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {View} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';
import {styles} from './NasaVideos.styled';

const NasaVideosScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Typography color={AstrogatorColor.White}>Videos</Typography>
    </View>
  );
};

export default NasaVideosScreen;
