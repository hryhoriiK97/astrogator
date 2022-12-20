import {NASA_API_KEY} from '@env';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {axios} from '../../axios';

const HomeScreen: FC = () => {
  axios.get(`/planetary/apod?api_key=${NASA_API_KEY}`).then(response => {
    console.log(response);
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
