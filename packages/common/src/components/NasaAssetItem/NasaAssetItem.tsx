import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {Chevron} from '../../../assets/svgs/Chevron';
import {InfoIcon} from '../../../assets/svgs/InfoIcon';
import {reactNativeHapticFeedbackOptions} from '../../config/reactNativeHapticFeedbackOptions';
import {NasaAssetItemProps} from './NasaAssetItem.props';
import {styles} from './NasaAssetItem.styled';

const NasaAssetItem: FC<NasaAssetItemProps> = ({
  imageSource,
  defaultSource,
  onMoreInfoPress,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FastImage
        source={imageSource}
        defaultSource={defaultSource}
        style={styles.image}
      />
      <View style={styles.buttonsWrapper}>
        <Pressable
          onPress={() => {
            ReactNativeHapticFeedback.trigger(
              'impactHeavy',
              reactNativeHapticFeedbackOptions,
            );
            onMoreInfoPress();
          }}
          style={styles.button}>
          <InfoIcon />
        </Pressable>
        <Pressable onPress={onPress} style={styles.button}>
          <Chevron />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default NasaAssetItem;
