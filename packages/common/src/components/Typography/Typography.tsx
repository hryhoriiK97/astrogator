import React from 'react';
import {Text} from 'react-native';
import {SpaceMono, TypographyProps} from './Typography.props';
import {styles} from './Typography.styled';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = SpaceMono.Regular,
  ...textProps
}) => {
  return (
    <Text style={styles(variant).text} {...textProps}>
      {children}
    </Text>
  );
};

export default Typography;
