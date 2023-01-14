import {LoadingScreen, NasaAssetItem} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {NasaImageItemResponse} from '../../../../types/NasaImageItemResponse';
import {NasaAssetsStackNavigationProp} from '../../../NasaAssets/NasaAssets.routes';
import {styles} from './NasaVideos.styled';

enum NasaVideosScreenQueryKey {
  NasaVideos = 'NasaVideos',
}

const NasaVideosScreen: FC = () => {
  const navigation = useNavigation<NasaAssetsStackNavigationProp>();
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

  const nasaVideosData: NasaImageItemResponse[] =
    nasaVideosResponse?.data.collection.items;

  const renderItem = ({item}: {item: NasaImageItemResponse}) => {
    const [imagePreview] = item.links;
    return (
      <NasaAssetItem
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
        title={item.data[0].title}
        onPress={() => {
          navigation.navigate('SelectedVideo', {
            videoCollectionUri: item.href,
          });
        }}
        onLongPress={console.log}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaVideosData}
        estimatedItemSize={175.5}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default NasaVideosScreen;
