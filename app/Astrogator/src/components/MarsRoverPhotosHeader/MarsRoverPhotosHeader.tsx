import {SpaceMono, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  MarsRover,
  marsRoverImages,
} from '../../stacks/MarsRovers/MarsRovers.utils';
import {AstrogatorColor} from '../../theming/theme';
import {BackButton} from '../BackButton';
import {MarsRoverPhotosHeaderProps} from './MarsRoverPhotosHeader.props';
import {Status, styles} from './MarsRoverPhotosHeader.styled';

const MarsRoverPhotosHeader: FC<MarsRoverPhotosHeaderProps> = ({
  rover,
  currentMarsSol,
  selectedCamera,
  onBackButtonPress,
  onFilterButtonPress,
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
        <View style={styles().roverNameWrapper}>
          <Typography variant={SpaceMono.Bold} style={styles().roverName}>
            {rover.name}
          </Typography>
          <Pressable
            style={styles().filterButton}
            onPress={onFilterButtonPress}>
            <Typography variant={SpaceMono.Bold} color={AstrogatorColor.White}>
              Filter
            </Typography>
          </Pressable>
        </View>
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
            Last Active Date: {rover.max_date}
          </Typography>
          <Typography variant={SpaceMono.Bold} style={styles().roverDetailText}>
            {`Martian Sol: ${currentMarsSol}`}
          </Typography>
          <Typography variant={SpaceMono.Bold} style={styles().roverDetailText}>
            {`Selected Camera: ${selectedCamera || '-'}`}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default MarsRoverPhotosHeader;
