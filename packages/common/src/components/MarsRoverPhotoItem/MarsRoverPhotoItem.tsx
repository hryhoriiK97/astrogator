import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {SafeImage} from '../SafeImage';
import {Raleway, Typography} from '../Typography';
import {MarsRoverPhotoItemProps} from './MarsRoverPhotoItem.props';
import {styles} from './MarsRoverPhotoItem.styled';

const MarsRoverPhotoItem: FC<MarsRoverPhotoItemProps> = ({
  imageSource,
  defaultSource,
  cameraFullName,
  cameraAbbreviation,
  earthData,
  sol,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SafeImage
        source={imageSource}
        defaultSource={defaultSource}
        imageStyle={styles.image}>
        <View style={styles.imageInformationWrapper}>
          <Typography variant={Raleway.Bold} style={styles.dateText}>
            {`Earth Date: ${earthData} / Martian Sol: ${sol}`}
          </Typography>
          <Typography
            style={styles.cameraName}
            numberOfLines={1}
            ellipsizeMode={'tail'}
            variant={
              Raleway.Bold
            }>{`${cameraFullName} (${cameraAbbreviation})`}</Typography>
        </View>
      </SafeImage>
    </Pressable>
  );
};

export default MarsRoverPhotoItem;
