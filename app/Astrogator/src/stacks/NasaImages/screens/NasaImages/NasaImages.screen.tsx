import {LoadingScreen, NasaAssetItem} from '@astrogator/common';
import {FlashList} from '@shopify/flash-list';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {NasaImageItemResponse} from '../../../../types/NasaImageItemResponse';
import {styles} from './NasaImages.styled';

enum NasaImagesScreenQueryKey {
  NasaImages = 'NasaImages',
}

const NasaImagesScreen: FC = () => {
  const {
    data: imagesResponse,
    isLoading: isImagesLoading,
    isError: isImagesRoversError,
    refetch: imagesRefetch,
    isRefetching: isImagesRefetching,
  } = useQuery(NasaImagesScreenQueryKey.NasaImages, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=image`),
  );

  if (isImagesLoading || isImagesRefetching) {
    return <LoadingScreen />;
  }

  const nasaImagesData: NasaImageItemResponse[] =
    imagesResponse?.data.collection.items;

  const renderItem = ({item}: {item: NasaImageItemResponse}) => {
    const [imagePreview] = item.links;
    return (
      <NasaAssetItem
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
        title={item.data[0].title}
        onPress={console.log}
        onLongPress={console.log}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaImagesData}
        estimatedItemSize={175.5}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default NasaImagesScreen;
