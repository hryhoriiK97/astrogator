import {LoadingScreen, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {AstrogatorColor} from '../../../../theming/theme';
import {NasaImageItem} from '../../../../types/NasaImageItem';

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

  const nasaImagesData: NasaImageItem[] = imagesResponse?.data.collection.items;

  return (
    <View style={{backgroundColor: AstrogatorColor.Black}}>
      <FlatList
        contentContainerStyle={{
          backgroundColor: AstrogatorColor.Black,
          paddingHorizontal: 16,
        }}
        data={nasaImagesData}
        renderItem={({item}) => {
          return (
            <Typography color={AstrogatorColor.White}>
              {item.data[0].title}
            </Typography>
          );
        }}
      />
    </View>
  );
};

export default ImagesScreen;
