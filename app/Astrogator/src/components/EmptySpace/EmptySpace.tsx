import React, {FC} from 'react';
import {View} from 'react-native';
import {EmptySpaceProps} from './EmptySpace.props';
import {styles} from './EmptySpace.styled';

const EmptySpace: FC<EmptySpaceProps> = ({height}) => {
  return <View style={styles({height}).container} />;
};

export default EmptySpace;
