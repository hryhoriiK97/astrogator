import {Raleway, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {View} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';
import {ApodModalProps} from './ApodModal.props';
import {styles} from './ApodModal.styled';

const ApodModal: FC<ApodModalProps> = ({title, description}) => {
  return (
    <View style={styles.container}>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.White}
        style={styles.title}>
        {title}
      </Typography>
      <Typography style={styles.description}>{description}</Typography>
    </View>
  );
};

export default ApodModal;
