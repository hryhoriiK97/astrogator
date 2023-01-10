import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PhotoStackParamList} from './Photo.routes';
import {styles} from './Photo.styled';

const PhotoScreen: FC = () => {
  const route = useRoute<RouteProp<PhotoStackParamList, 'PhotoScreen'>>();
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

export default PhotoScreen;
