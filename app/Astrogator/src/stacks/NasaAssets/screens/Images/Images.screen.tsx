import {
  Divider,
  DividerVariant,
  getRelativeUnits,
  LoadingScreen,
  NasaImageItem,
} from '@astrogator/common';
import {FlashList} from '@shopify/flash-list';
import {format} from 'date-fns';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {NasaImageItemResponse} from '../../../../types/NasaImageItemResponse';
import {styles} from './Images.styled';

const {bp} = getRelativeUnits();

enum ImagesScreenQueryKey {
  ImagesScreen = 'ImagesScreen',
}

const ImagesScreen: FC = () => {
  const {
    data: imagesResponse,
    isLoading: isImagesLoading,
    isError: isImagesRoversError,
    refetch: imagesRefetch,
    isRefetching: isImagesRefetching,
  } = useQuery(ImagesScreenQueryKey.ImagesScreen, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=image`),
  );

  if (isImagesLoading || isImagesRefetching) {
    return <LoadingScreen />;
  }

  const nasaImagesData: NasaImageItemResponse[] =
    imagesResponse?.data.collection.items;

  const renderItem = ({item}: {item: NasaImageItemResponse}) => {
    return (
      <NasaImageItem
        imageSource={{uri: item.links[0].href}}
        defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
        title={item.data[0].title}
        description={item.data[0].description}
        date={format(new Date(item.data[0].date_created), 'dd/MM/yyyy')}
        author={item.data[0].secondary_creator}
      />
    );
  };

  const renderSeparator = () => (
    <Divider variant={DividerVariant.Divider_15_Vertical} />
  );

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaImagesData}
        renderItem={renderItem}
        estimatedItemSize={510 * bp}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default ImagesScreen;
