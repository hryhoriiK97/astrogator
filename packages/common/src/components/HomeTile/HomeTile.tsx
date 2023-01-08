import React, {FC} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import {ChevronIcon} from '../../../assets/svgs/ChevronIcon';
import {SpaceMono, Typography} from '../Typography';
import {HomeTileProps} from './HomeTile.props';
import {styles} from './HomeTile.styled';

const HomeTile: FC<HomeTileProps> = ({
  title,
  imageSource,
  onPress,
  onLongPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={styles.image}
          source={imageSource}>
          <Typography variant={SpaceMono.Bold} style={styles.title}>
            {title}
          </Typography>
          <View style={styles.iconWrapper}>
            <ChevronIcon />
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default HomeTile;
