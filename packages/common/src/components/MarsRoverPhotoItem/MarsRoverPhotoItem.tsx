import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {SafeImage} from '../SafeImage';
import {SpaceMono, Typography} from '../Typography';
import {MarsRoverPhotoItemProps} from './MarsRoverPhotoItem.props';
import {styles} from './MarsRoverPhotoItem.styled';

const MarsRoverPhotoItem: FC<MarsRoverPhotoItemProps> = ({
  imageSource,
  defaultSource,
  cameraFullName,
  cameraAbbreviation,
  earthData,
  sol,
}) => {
  return (
    <Pressable style={styles.container}>
      <SafeImage
        source={imageSource}
        defaultSource={defaultSource}
        imageStyle={styles.image}
        linearGradientColors={['#EC9F05', '#FF4E00']}
        loadingIndicatorHeight={3}
      />
      <View style={styles.imageInformationWrapper}>
        <Typography variant={SpaceMono.Bold} style={styles.dateText}>
          {`Earth Date: ${earthData} / Martian Sol: ${sol}`}
        </Typography>
        <Typography
          style={styles.cameraName}
          variant={
            SpaceMono.Bold
          }>{`${cameraFullName} (${cameraAbbreviation})`}</Typography>
      </View>
    </Pressable>
  );
};

export default MarsRoverPhotoItem;
