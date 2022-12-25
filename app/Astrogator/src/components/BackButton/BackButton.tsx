import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Arrow} from '../../../assets/svgs/Arrow';
import {BackButtonProps} from './BackButton.props';
import {styles} from './BackButton.styled';

const BackButton: FC<BackButtonProps> = ({onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Arrow />
    </Pressable>
  );
};

export default BackButton;
