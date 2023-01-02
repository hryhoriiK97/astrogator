import {SpaceMono, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {ImageBackground, Pressable} from 'react-native';

import {HomeTileProps} from './HomeTile.props';
import {styles} from './HomeTile.styled';

const HomeTile: FC<HomeTileProps> = ({title, imageSource, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.image}
        source={imageSource}>
        <Typography variant={SpaceMono.Bold} style={styles.title}>
          {title}
        </Typography>
      </ImageBackground>
    </Pressable>
  );
};

export default HomeTile;
