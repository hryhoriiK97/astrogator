import React, {FC} from 'react';
import {View} from 'react-native';
import {DividerProps} from './Divider.props';
import {styles} from './Divider.styled';

const Divider: FC<DividerProps> = ({variant}) => {
  return <View style={styles(variant).divider} />;
};

export default Divider;
