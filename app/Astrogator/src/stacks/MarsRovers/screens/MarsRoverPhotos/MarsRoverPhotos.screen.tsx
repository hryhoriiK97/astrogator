import {SpaceMono, Typography} from '@astrogator/common';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import BgImage from '../../../../../assets/images/bg-image.png';
import {BackButton} from '../../../../components/BackButton';
import {
  MarsRoversStackNavigationProp,
  MarsRoversStackParamList,
} from '../../MarsRovers.routes';
import {MarsRover, marsRoverImages} from '../../MarsRovers.utils';
import {Status, styles} from './MarsRoverPhotos.styled';

const MarsRoverPhotosScreen: FC = () => {
  const {goBack} = useNavigation<MarsRoversStackNavigationProp>();
  const route =
    useRoute<RouteProp<MarsRoversStackParamList, 'MarsRoverPhotosScreen'>>();
  const {rover} = route.params;
  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles().backgroundImage}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles().container}>
        <View style={styles().imageWrapper}>
          <BackButton onPress={() => goBack()} />
          <FastImage
            source={marsRoverImages[rover.name.toLowerCase() as MarsRover]}
            style={styles().roverImage}
          />
        </View>
        <View style={styles().roverInformationWrapper}>
          <Typography variant={SpaceMono.Bold} style={styles().roverName}>
            {rover.name}
          </Typography>
          <View>
            <View style={styles().statusWrapper}>
              <Typography
                variant={SpaceMono.Bold}
                style={styles().roverDetailText}>
                Status:
              </Typography>
              <Typography
                variant={SpaceMono.Bold}
                style={styles(rover.status as Status).status}>
                {rover.status}
              </Typography>
            </View>
            <Typography
              variant={SpaceMono.Bold}
              style={styles().roverDetailText}>
              Launch Date: {rover.launch_date}
            </Typography>
            <Typography
              variant={SpaceMono.Bold}
              style={styles().roverDetailText}>
              Landing Date: {rover.landing_date}
            </Typography>
            <Typography
              variant={SpaceMono.Bold}
              style={styles().roverDetailText}>
              Last Martian Sol: {rover.max_sol}
            </Typography>
            <Typography
              variant={SpaceMono.Bold}
              style={styles().roverDetailText}>
              Last Active Date: {rover.max_date}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MarsRoverPhotosScreen;
