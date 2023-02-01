import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {DatePickerIcon} from '../../../assets/svgs/DatePickerIcon';
import {MagnifierIcon} from '../../../assets/svgs/MagnifierIcon';
import {ShareIcon} from '../../../assets/svgs/ShareIcon';
import {share} from '../../utils/sharing/share';
import {ImageActionsTabProps} from './ImageActionsTab.props';
import {styles} from './ImageActionsTab.styled';

const ImageActionsTab: FC<ImageActionsTabProps> = ({
  onMagnifierButtonPress,
  onDatePickerButtonPress,
}) => {
  return (
    <View style={styles.actionButtonsWrapper}>
      <Pressable
        style={styles.showMoreButton}
        onPress={() => {
          share();
        }}>
        <ShareIcon />
      </Pressable>
      <Pressable style={styles.showMoreButton} onPress={onMagnifierButtonPress}>
        <MagnifierIcon />
      </Pressable>
      <Pressable onPress={onDatePickerButtonPress}>
        <DatePickerIcon />
      </Pressable>
    </View>
  );
};

export default ImageActionsTab;
