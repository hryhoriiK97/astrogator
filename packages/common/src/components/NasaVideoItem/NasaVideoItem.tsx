import React, {FC} from 'react';
import {Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Typography} from '../Typography';
import {NasaVideoItemProps} from './NasaVideoItem.props';
import {styles} from './NasaVideoItem.styled';

const NasaVideoItem: FC<NasaVideoItemProps> = ({
  imageSource,
  defaultSource,
  title,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <FastImage
        source={imageSource}
        defaultSource={defaultSource}
        style={styles.image}
      />
      <Typography style={styles.title} numberOfLines={1}>
        {title}
      </Typography>
    </Pressable>
  );
};

export default NasaVideoItem;
