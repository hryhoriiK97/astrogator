import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Background from '../../../assets/images/Group.png';
import {BackButton} from '../../components/BackButton';
import {AstrogatorColor} from '../../theming/theme';
import MarsFullImageStack from '../MarsFullImage';
import {MarsRoversPhotosStackRoutes} from './MarsRoversPhotos.routes';
import MarsRoverPhotosScreen from './screens/MarsRoverPhotos/MarsRoverPhotos.screen';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    backgroundColor: AstrogatorColor.Black,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  backdropWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const Stack = createNativeStackNavigator();

const MarsRoversPhotosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackground: () => {
          const {goBack} = useNavigation();
          return (
            <ImageBackground
              source={Background}
              style={styles.backgroundImage}
              imageStyle={styles.image}>
              <BackButton onPress={goBack} />
              <View style={styles.backdropWrapper} />
            </ImageBackground>
          );
        },
      }}
      initialRouteName={MarsRoversPhotosStackRoutes.MarsRoverPhotosScreen}>
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.MarsRoverPhotosScreen}
        component={MarsRoverPhotosScreen}
      />
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.MarsFullImageStack}
        options={{animation: 'fade'}}
        component={MarsFullImageStack}
      />
    </Stack.Navigator>
  );
};

export default MarsRoversPhotosStack;
