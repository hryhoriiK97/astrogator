import {Divider, DividerVariant} from '@astrogator/common';
import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {MagnifierIcon} from '../../../assets/svgs/MagnifierIcon';
import {ShareIcon} from '../../../assets/svgs/ShareIcon';
import {share} from '../../utils/sharing/share';
import {ImageActionsTabProps} from './ImageActionsTab.props';
import {styles} from './ImageActionsTab.styled';

const ImageActionsTab: FC<ImageActionsTabProps> = ({
  onMagnifierButtonPress,
}) => {
  return (
    <>
      <View style={styles.actionButtonsWrapper}>
        <Pressable
          style={styles.showMoreButton}
          onPress={() => {
            share();
          }}>
          <ShareIcon />
        </Pressable>
        <Divider variant={DividerVariant.Divider_3_Horizontal} />
        <Pressable
          style={styles.showMoreButton}
          onPress={onMagnifierButtonPress}>
          <MagnifierIcon />
        </Pressable>
      </View>
    </>
  );
};

export default ImageActionsTab;
