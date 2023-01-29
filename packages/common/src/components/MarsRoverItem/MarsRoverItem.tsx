import React, {FC} from 'react';
import {Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {reactNativeHapticFeedbackOptions} from '../../config/reactNativeHapticFeedbackOptions';
import {Raleway, Typography} from '../Typography';
import {MarsRoverItemProps} from './MarsRoverItem.props';
import {styles} from './MarsRoverItem.styled';

const MarsRoverItem: FC<MarsRoverItemProps> = ({
  name,
  imageSource,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      onLongPress={() => {
        ReactNativeHapticFeedback.trigger(
          'impactHeavy',
          reactNativeHapticFeedbackOptions,
        );
        onLongPress();
      }}>
      <Typography variant={Raleway.Bold} style={styles.title}>
        {name}
      </Typography>
      <FastImage
        source={imageSource}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
    </Pressable>
  );
};

export default MarsRoverItem;
