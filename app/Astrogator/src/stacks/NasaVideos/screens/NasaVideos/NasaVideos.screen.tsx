import {Divider, DividerVariant, LoadingScreen} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import {MasonryFlashList} from '@shopify/flash-list';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import NasaVideoItem from '../../../../../../../packages/common/src/components/NasaVideoItem/NasaVideoItem';
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
      <NasaVideoItem
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

  const renderSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
  };

  return (
    <View style={styles.container}>
      <MasonryFlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaVideosData}
        estimatedItemSize={140}
        renderItem={renderItem}
        numColumns={2}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default NasaVideosScreen;
