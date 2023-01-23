import {LoadingScreen} from '@astrogator/common';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {FC} from 'react';
import {useQuery} from 'react-query';
import {LiveVideoPlayer} from '../../../../components/VideoPlayer';
import {
  NasaVideosStackNavigationProp,
  NasaVideosStackParamList,
} from '../../NasaVideos.routes';

enum SelectedVideoScreenQueryKey {
  SelectedVideo = 'SelectedVideo',
}

const SelectedVideoScreen: FC = () => {
  const navigation = useNavigation<NasaVideosStackNavigationProp>();
  const route =
    useRoute<RouteProp<NasaVideosStackParamList, 'SelectedVideo'>>();
  const {videoCollectionUri} = route.params;

  const {
    data: nasaVideosResponse,
    isLoading: isNasaVideosLoading,
    isError: isNasaVideosRoversError,
    refetch: nasaVideosRefetch,
    isRefetching: isNasaVideosRefetching,
  } = useQuery(SelectedVideoScreenQueryKey.SelectedVideo, () =>
    axios.get(videoCollectionUri),
  );

  if (isNasaVideosLoading) {
    return <LoadingScreen />;
  }

  const uriCollection: string[] = nasaVideosResponse?.data;

  const filteredUris = uriCollection.find(uri => {
    return uri.includes('medium.mp4');
  });

  const handledUriWhiteSpaces = filteredUris?.replace(/ /g, '%20');
  const handledUriHttp = handledUriWhiteSpaces?.replace('http', 'https');

  return (
    <LiveVideoPlayer
      videoUri={handledUriHttp!}
      onBackPress={navigation.goBack}
    />
  );
};

export default SelectedVideoScreen;
