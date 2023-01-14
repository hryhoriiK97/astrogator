import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FullImageStackParamList} from './FullImage.routes';
import {styles} from './FullImage.styled';

const FullImageScreen: FC = () => {
  const route =
    useRoute<RouteProp<FullImageStackParamList, 'FullImageScreen'>>();
  const {photoUri} = route.params;
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{uri: photoUri}}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default FullImageScreen;
