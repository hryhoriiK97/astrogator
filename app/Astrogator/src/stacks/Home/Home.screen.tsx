import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Apod} from '../../components/Apod';
import {styles} from './Home.styled';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Apod />
    </SafeAreaView>
  );
};

export default HomeScreen;
