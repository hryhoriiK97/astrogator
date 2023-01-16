import {BlurView} from '@react-native-community/blur';
import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Divider, DividerVariant} from '../Divider';
import {Typography} from '../Typography';
import {ApodWidgetProps} from './ApodWidget.props';
import {styles} from './ApodWidget.styled';

const ApodWidget: FC<ApodWidgetProps> = ({
  imageSource,
  title,
  date,
  author,
  description,
  onPress,
  defaultSource,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage source={imageSource} style={styles.imageBackground} />
      <View style={styles.contentWrapper}>
        <BlurView
          style={styles.blurView}
          blurType="light"
          blurAmount={3}
          downsampleFactor={100}
        />
        <Typography style={styles.title}>{title}</Typography>
        <View style={styles.apodInfoWrapper}>
          <Typography style={styles.apodInfoText}>{author}</Typography>
          <Divider variant={DividerVariant.Divider_5_Horizontal} />
          <Typography style={styles.apodInfoText}>{date}</Typography>
        </View>
        <Typography style={styles.description}>{description}</Typography>
        <Pressable style={styles.viewMoreButton}>
          <Typography style={styles.viewMoreTitle}>View More</Typography>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ApodWidget;
