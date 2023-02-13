import React, {FC} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {Chevron} from '../../../assets/svgs/Chevron';
import {reactNativeHapticFeedbackOptions} from '../../config/reactNativeHapticFeedbackOptions';
import {Typography} from '../Typography';
import {MarsRoverWidgetProps} from './MarsRoverWidget.props';
import {styles} from './MarsRoverWidget.styled';

const MarsRoverWidget: FC<MarsRoverWidgetProps> = ({
  name,
  imageSource,
  onPress,
  onLongPress,
}) => {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.imageBackground}
      imageStyle={styles.image}>
      <Pressable
        style={styles.innerWrapper}
        onPress={onPress}
        onLongPress={() => {
          ReactNativeHapticFeedback.trigger(
            'impactHeavy',
            reactNativeHapticFeedbackOptions,
          );
          onLongPress();
        }}>
        <View style={styles.marsRoverNameWrapper}>
          <View style={styles.dateAuthorInfo}>
            <Typography style={styles.title}>{name}</Typography>
          </View>
          <Pressable style={styles.moreInfoButton}>
            <Chevron />
          </Pressable>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default MarsRoverWidget;
