import {
  ApodWidget,
  Divider,
  DividerVariant,
  LoadingScreen,
} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {EmptySpace} from '../../../../components/EmptySpace';
import {NasaAssetItemResponse} from '../../../../types/NasaAssetItemResponse';
import {NasaAssetDetailsStackRoutes} from '../../../NasaAssetDetails/NasaAssetDetails.routes';
import {
  RootStackNavigationProp,
  RootStackRoutes,
} from '../../../Root/Root.routes';
import {styles} from './NasaVideos.styled';

enum NasaVideosScreenQueryKey {
  NasaVideos = 'NasaVideos',
}

const NasaVideosScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {
    data: nasaVideosResponse,
    isLoading: isNasaVideosLoading,
    fetchNextPage: fetchNasaVideosNextPage,
    hasNextPage: hasNasaVideosNextPage,
    isFetchedAfterMount: isNasaVideosFetchedAfterMount,
    isFetchingNextPage: isNasaVideosFetchingNextPage,
    isError: isNasaVideosError,
    refetch: nasaVideosRefetch,
    isRefetching: isNasaVideosRefetching,
  } = useInfiniteQuery(
    NasaVideosScreenQueryKey.NasaVideos,
    async ({pageParam = 1}) => {
      const data = await nasaAssetsAxiosInstance.get(
        `/search?media_type=video&page=${pageParam}`,
      );
      return {
        data: data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: lastPage => {
        if (!!lastPage.data.data.collection.links[0].prompt) {
          return lastPage.nextPage;
        }
      },
    },
  );

  const loadNextPageData = () => {
    if (hasNasaVideosNextPage) {
      fetchNasaVideosNextPage();
    }
  };

  if (isNasaVideosFetchedAfterMount && isNasaVideosLoading) {
    return <LoadingScreen />;
  }
  const nasaVideosData: NasaAssetItemResponse[] = nasaVideosResponse?.pages
    .length
    ? nasaVideosResponse.pages.flatMap(page => page.data.data.collection.items)
    : [];

  const renderItem = ({item}: {item: NasaAssetItemResponse}) => {
    const [imagePreview] = item.links;
    return (
      <ApodWidget
        title={item.data[0].title}
        date={item.data[0].date_created}
        author={item.data[0].secondary_creator || '-'}
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.webp')}
        onPress={() => {
          navigation.navigate(RootStackRoutes.NasaAssetDetailsStack, {
            screen: NasaAssetDetailsStackRoutes.NasaAssetDetailsScreen,
            params: {
              nasaAssetItem: item,
            },
          });
        }}
      />
    );
  };

  const renderItemSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
  };

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaVideosData}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={145}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaVideosFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

export default NasaVideosScreen;
