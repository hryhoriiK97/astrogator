import {Typography} from '@astrogator/common';
import {Chevron} from '@astrogator/common/assets/svgs/Chevron';
import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {BackButtonProps} from './BackButton.props';
import {styles} from './BackButton.styled';

const BackButton: FC<BackButtonProps> = ({onPress}) => {
  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <Chevron rotate={180} />
      <Typography style={styles.backButtonTitle}>Return</Typography>
    </Pressable>
  );
};

export default BackButton;
