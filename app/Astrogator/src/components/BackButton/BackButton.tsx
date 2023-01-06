import {SpaceMono, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Arrow} from '../../../assets/svgs/Arrow';
import {AstrogatorColor} from '../../theming/theme';
import {BackButtonProps} from './BackButton.props';
import {styles} from './BackButton.styled';

const BackButton: FC<BackButtonProps> = ({onPress}) => {
  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <Arrow />
      <Typography
        variant={SpaceMono.Bold}
        style={styles.backButtonTitle}
        color={AstrogatorColor.PomodoroEMozzarella}>
        Back
      </Typography>
    </Pressable>
  );
};

export default BackButton;
