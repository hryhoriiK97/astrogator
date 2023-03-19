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
import {RootStackNavigationProp} from '../../../Root/Root.routes';
import {styles} from './NasaImages.styled';

enum NasaImagesScreenQueryKey {
  NasaImages = 'NasaImages',
}

const NasaImagesScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {
    data: nasaImagesResponse,
    isLoading: isNasaImagesLoading,
    fetchNextPage: fetchNasaImagesNextPage,
    hasNextPage: hasNasaImagesNextPage,
    isFetchedAfterMount: isNasaImagesFetchedAfterMount,
    isFetchingNextPage: isNasaImagesFetchingNextPage,
    isError: isImagesRoversError,
    refetch: imagesRefetch,
    isRefetching: isNasaImagesRefetching,
  } = useInfiniteQuery(
    NasaImagesScreenQueryKey.NasaImages,
    async ({pageParam = 1}) => {
      const data = await nasaAssetsAxiosInstance.get(
        `/search?media_type=image&page=${pageParam}`,
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
    if (hasNasaImagesNextPage) {
      fetchNasaImagesNextPage();
    }
  };

  if (isNasaImagesFetchedAfterMount && isNasaImagesLoading) {
    return <LoadingScreen />;
  }

  const nasaImagesData: NasaAssetItemResponse[] = nasaImagesResponse?.pages
    .length
    ? nasaImagesResponse.pages.flatMap(page => page.data.data.collection.items)
    : [];

  const renderItem = ({item}: {item: NasaAssetItemResponse}) => {
    const [imagePreview] = item.links;
    return (
      <ApodWidget
        imageSource={{uri: imagePreview.href}}
        title={item.data[0].title}
        date={item.data[0].date_created}
        author={item.data[0].secondary_creator!}
        defaultSource={require('../../../../../assets/images/apod-tile.webp')}
        onPress={() => {
          navigation.navigate('NasaAssetDetailsStack', {
            screen: 'NasaAssetDetailsScreen',
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
        data={nasaImagesData}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={145}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaImagesFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

export default NasaImagesScreen;
