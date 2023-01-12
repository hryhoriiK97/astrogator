import {Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {View} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';
import {styles} from './Videos.styled';

const VideosScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Typography color={AstrogatorColor.White}>Images</Typography>
    </View>
  );
};

export default VideosScreen;
