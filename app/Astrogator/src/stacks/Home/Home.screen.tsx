import {NASA_API_KEY} from '@env';
import React, {FC} from 'react';
import {View} from 'react-native';
import {axios} from '../../axios';
import {Apod} from '../../components/Apod';
import {styles} from './Home.styled';

const HomeScreen: FC = () => {
  axios.get(`/planetary/apod?api_key=${NASA_API_KEY}`).then(response => {
    console.log(response);
  });
  return (
    <View style={styles.container}>
      <Apod />
    </View>
  );
};

export default HomeScreen;
