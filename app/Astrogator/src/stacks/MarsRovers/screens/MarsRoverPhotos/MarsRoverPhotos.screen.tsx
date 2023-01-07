import {Typography} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {useQuery} from 'react-query';
import BgImage from '../../../../../assets/images/bg-image.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {MarsRoverPhotosHeader} from '../../../../components/MarsRoverPhotosHeader';
import {MarsRoverPhotoItemResponse} from '../../../../types/MarsRoverPhotoItemResponse';
import {
  MarsRoversStackNavigationProp,
  MarsRoversStackParamList,
} from '../../MarsRovers.routes';
import {styles} from './MarsRoverPhotos.styled';

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = 'MarsRoverPhotos',
}

const MarsRoverPhotosScreen: FC = () => {
  const {goBack} = useNavigation<MarsRoversStackNavigationProp>();

  const route =
    useRoute<RouteProp<MarsRoversStackParamList, 'MarsRoverPhotosScreen'>>();
  const {rover} = route.params;

  const {
    data: marsRoverPhotosResponse,
    isLoading: isMarsRoverPhotosLoading,
    isError: isMarsRoverPhotosError,
    refetch: marsRoverPhotosRefetch,
    isRefetching: isMarsRoverPhotosRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRoverPhotos, () =>
    apodAxiosInstance.get(
      `/mars-photos/api/v1/rovers/${rover.name.toLowerCase()}/photos?sol=${
        rover.max_sol
      }&api_key=${NASA_API_KEY}`,
    ),
  );

  if (isMarsRoverPhotosLoading || isMarsRoverPhotosRefetching) {
    <ActivityIndicator />;
  }

  const marsRoverPhotosData: MarsRoverPhotoItemResponse[] =
    marsRoverPhotosResponse?.data.photos;

  console.log(marsRoverPhotosResponse);

  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles().backgroundImage}>
      <StatusBar barStyle="light-content" />
      <FlatList
        ListHeaderComponent={
          <MarsRoverPhotosHeader rover={rover} onBackButtonPress={goBack} />
        }
        data={marsRoverPhotosData}
        renderItem={({item}) => {
          return <Typography>{item.camera.name}</Typography>;
        }}
      />
    </ImageBackground>
  );
};

export default MarsRoverPhotosScreen;
