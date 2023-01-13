import {LoadingScreen, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {AstrogatorColor} from '../../../../theming/theme';
import {styles} from './NasaVideos.styled';

enum NasaVideosScreenQueryKey {
  NasaVideos = 'NasaVideos',
}

const NasaVideosScreen: FC = () => {
  const {
    data: nasaVideosResponse,
    isLoading: isNasaVideosLoading,
    isError: isNasaVideosRoversError,
    refetch: nasaVideosRefetch,
    isRefetching: isNasaVideosRefetching,
  } = useQuery(NasaVideosScreenQueryKey.NasaVideos, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=video`),
  );

  if (isNasaVideosLoading || isNasaVideosRefetching) {
    return <LoadingScreen />;
  }

  console.log(nasaVideosResponse);

  return (
    <View style={styles.container}>
      <Typography color={AstrogatorColor.White}>Videos</Typography>
    </View>
  );
};

export default NasaVideosScreen;
