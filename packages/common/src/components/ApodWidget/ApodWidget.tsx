import React, {FC} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import {Chevron} from '../../../assets/svgs/Chevron';
import {Typography} from '../Typography';
import {ApodWidgetProps} from './ApodWidget.props';
import {styles} from './ApodWidget.styled';

const ApodWidget: FC<ApodWidgetProps> = ({
  imageSource,
  title,
  date,
  author,
  onPress,
  defaultSource,
}) => {
  return (
    <ImageBackground
      source={imageSource}
      defaultSource={defaultSource}
      style={styles.imageBackground}
      imageStyle={styles.image}>
      <Pressable style={styles.innerWrapper} onPress={onPress}>
        <View style={styles.titleWrapper}>
          <Typography style={styles.title}>{title}</Typography>
        </View>
        <View style={styles.apodInfoWrapper}>
          <View style={styles.dateAuthorInfo}>
            <Typography style={styles.infoTitle}>Author: {author}</Typography>
            <Typography style={styles.infoTitle}>Date: {date}</Typography>
          </View>
          <Pressable style={styles.moreInfoButton}>
            <Chevron />
          </Pressable>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default ApodWidget;
