import {Raleway, Typography} from '@astrogator/common';
import {BlurView} from '@react-native-community/blur';
import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Settings} from '../../../assets/svgs/Settings';
import {
  MarsRover,
  marsRoverImages,
} from '../../stacks/BottomTab/screens/MarsRovers/MarsRovers.utils';
import {MarsRoverPhotosHeaderProps} from './MarsRoverPhotosHeader.props';
import {Status, styles} from './MarsRoverPhotosHeader.styled';

const MarsRoverPhotosHeader: FC<MarsRoverPhotosHeaderProps> = ({
  rover,
  currentMarsSol,
  selectedCamera,
  onFilterButtonPress,
}) => {
  return (
    <View style={styles().container}>
      <BlurView blurType={'dark'} blurAmount={40} style={styles().blurView} />
      <View style={styles().roverInformationWrapper}>
        <FastImage
          source={marsRoverImages[rover.name.toLowerCase() as MarsRover]}
          style={styles().roverImage}
        />
        <View style={styles().roverNameWrapper}>
          <View>
            <Typography variant={Raleway.Bold} style={styles().roverName}>
              {rover.name}
            </Typography>
            <View style={styles().statusWrapper}>
              <Typography
                variant={Raleway.Bold}
                style={styles().roverDetailText}>
                Status:
              </Typography>
              <Typography
                variant={Raleway.Bold}
                style={styles(rover.status as Status).status}>
                {rover.status}
              </Typography>
            </View>
          </View>
          <Pressable
            style={styles().filterButton}
            onPress={onFilterButtonPress}>
            <Settings />
          </Pressable>
        </View>
        <View>
          <Typography variant={Raleway.Bold} style={styles().roverDetailText}>
            {`Launch Date: ${rover.launch_date}`}
          </Typography>
          <Typography variant={Raleway.Bold} style={styles().roverDetailText}>
            {`Landing Date: ${rover.landing_date}`}
          </Typography>
          <Typography variant={Raleway.Bold} style={styles().roverDetailText}>
            {`Last Active Date: ${rover.max_date}`}
          </Typography>
          <Typography variant={Raleway.Bold} style={styles().roverDetailText}>
            {`Martian Sol: ${currentMarsSol}`}
          </Typography>
          <Typography variant={Raleway.Bold} style={styles().roverDetailText}>
            {`Selected Camera: ${selectedCamera || '-'}`}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default MarsRoverPhotosHeader;
