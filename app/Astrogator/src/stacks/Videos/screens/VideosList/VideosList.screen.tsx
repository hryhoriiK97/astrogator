import {Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';
import {styles} from './VideosList.styled';

const VideosListScreen: FC = () => {
  return (
    <View style={styles.contentWrapper}>
      <SafeAreaView style={styles.container}>
        <Typography color={AstrogatorColor.White}>VIDEOS</Typography>
      </SafeAreaView>
    </View>
  );
};

export default VideosListScreen;
