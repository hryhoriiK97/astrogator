import {Typography} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {useQuery} from 'react-query';
import BgImage from '../../../../../assets/images/bg-image.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {AstrogatorColor} from '../../../../theming/theme';
import {MarsRoverPhotosResponse} from '../../../../types/MarsRoverPhotosResponse';
import {styles} from './MarsRoverPhotos.styled';

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = 'MarsRoverPhotos',
}

const MarsRoverPhotosScreen: FC = () => {
  const {
    data: marsRoverPhotosResponse,
    isLoading: isMarsRoverPhotosLoading,
    isError: isMarsRoverPhotosError,
    refetch: marsRoverPhotosRefetch,
    isRefetching: isMarsRoverPhotosRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRoverPhotos, () =>
    apodAxiosInstance.get(
      `/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`,
    ),
  );

  if (isMarsRoverPhotosLoading || isMarsRoverPhotosRefetching) {
    return <ActivityIndicator />;
  }

  const marsRoverPhotosData: MarsRoverPhotosResponse[] =
    marsRoverPhotosResponse?.data;

  console.log({marsRoverPhotosData});

  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Typography color={AstrogatorColor.White}>Mars Rover</Typography>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MarsRoverPhotosScreen;
