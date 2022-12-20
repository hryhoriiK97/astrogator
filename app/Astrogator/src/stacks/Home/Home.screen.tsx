import React, {FC} from 'react';
import {Text, View} from 'react-native';

const HomeScreen: FC = () => {
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
