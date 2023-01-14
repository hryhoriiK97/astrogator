import React, {FC} from 'react';
import {Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Typography} from '../Typography';
import {NasaAssetItemProps} from './NasaAssetItem.props';
import {styles} from './NasaAssetItem.styled';

const NasaAssetItem: FC<NasaAssetItemProps> = ({
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

export default NasaAssetItem;
