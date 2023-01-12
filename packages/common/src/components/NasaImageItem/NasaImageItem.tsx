import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {SafeImage} from '../SafeImage';
import {Typography} from '../Typography';
import {NasaImageItemProps} from './NasaImageItem.props';
import {styles} from './NasaImageItem.styled';

const NasaImageItem: FC<NasaImageItemProps> = ({
  imageSource,
  defaultSource,
  title,
  description,
  date,
  author,
}) => {
  return (
    <Pressable style={styles.container}>
      <SafeImage
        source={imageSource}
        defaultSource={defaultSource}
        linearGradientColors={['#724FFF', '#724FFF']}
        loadingIndicatorHeight={3}
      />
      <View style={styles.contentWrapper}>
        <Typography style={styles.title}>{title}</Typography>
        <View style={styles.subheader}>
          <Typography style={styles.subheaderTitle}>
            Author: {author}
          </Typography>
          <Typography style={styles.subheaderTitle}>Date: {date}</Typography>
        </View>
        <Typography>{description}</Typography>
      </View>
    </Pressable>
  );
};

export default NasaImageItem;
