import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {LoadingScreenProps} from './LoadingScreen.props';
import {styles} from './LoadingScreen.styled';

const LoadingScreen: FC<LoadingScreenProps> = ({CustomActivityIndicator}) => {
  return (
    <View style={styles.container}>
      {CustomActivityIndicator ?? (
        <ActivityIndicator size={'large'} color={'#724FFF'} />
      )}
    </View>
  );
};

export default LoadingScreen;
