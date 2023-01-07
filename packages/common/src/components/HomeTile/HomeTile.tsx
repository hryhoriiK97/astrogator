import React, {FC} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import {ChevronIcon} from '../../../assets/svgs/ChevronIcon';
import {SpaceMono, Typography} from '../Typography';
import {HomeTileProps} from './HomeTile.props';
import {styles} from './HomeTile.styled';

const HomeTile: FC<HomeTileProps> = ({
  title,
  headerTitle,
  imageSource,
  onPress,
  onMoreInfoPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography variant={SpaceMono.Bold}>{headerTitle}</Typography>
        <Pressable onPress={onMoreInfoPress}>
          <Typography>More Info</Typography>
        </Pressable>
      </View>
      <Pressable onPress={onPress} style={styles.tileWrapper}>
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
