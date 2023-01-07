import {SpaceMono, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  MarsRover,
  marsRoverImages,
} from '../../stacks/MarsRovers/MarsRovers.utils';
import {
  Status,
  styles,
} from '../../stacks/MarsRovers/screens/MarsRoverPhotos/MarsRoverPhotos.styled';
import {BackButton} from '../BackButton';
import {MarsRoverPhotosHeaderProps} from './MarsRoverPhotosHeader.props';

const MarsRoverPhotosHeader: FC<MarsRoverPhotosHeaderProps> = ({
  rover,
  onBackButtonPress,
}) => {
  return (
    <View style={styles().container}>
      <View style={styles().imageWrapper}>
        <BackButton onPress={() => onBackButtonPress()} />
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
          <Typography variant={SpaceMono.Bold} style={styles().roverDetailText}>
            Launch Date: {rover.launch_date}
          </Typography>
          <Typography variant={SpaceMono.Bold} style={styles().roverDetailText}>
            Landing Date: {rover.landing_date}
          </Typography>
          <Typography variant={SpaceMono.Bold} style={styles().roverDetailText}>
            Last Martian Sol: {rover.max_sol}
          </Typography>
          <Typography variant={SpaceMono.Bold} style={styles().roverDetailText}>
            Last Active Date: {rover.max_date}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default MarsRoverPhotosHeader;
