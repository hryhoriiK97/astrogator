import {LoadingScreen, NasaAssetItem} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useCallback, useRef, useState} from 'react';
import {View} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {EmptySpace} from '../../../../components/EmptySpace';
import {NasaAssetItemModal} from '../../../../components/NasaAssetItemModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {
  NasaAssetItemData,
  NasaAssetItemResponse,
} from '../../../../types/NasaAssetItemResponse';
import {getBottomModalSnapPoint} from '../../../../utils/getBottomModalSnapPoint';
import {
  RootStackNavigationProp,
  RootStackRoutes,
} from '../../../Root/Root.routes';
import {SelectedVideoStackRoutes} from '../../../SelectedVideo/SelectedVideo.routes';
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
        return lastPage.nextPage;
      },
    },
  );

  const loadNextPageData = () => {
    if (hasNasaVideosNextPage) {
      fetchNasaVideosNextPage();
    }
  };

  const [selectedNasaVideoData, setSelectedNasaVideoData] =
    useState<NasaAssetItemData | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

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
      <NasaAssetItem
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.webp')}
        onMoreInfoPress={() => {
          setSelectedNasaVideoData(item.data[0]);
          handlePresentModalPress();
        }}
        onPress={() => {
          navigation.navigate(RootStackRoutes.SelectedVideoStack, {
            screen: SelectedVideoStackRoutes.SelectedVideoScreen,
            params: {
              videoCollectionUri: item.href,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaVideosData}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={145}
        renderItem={renderItem}
        numColumns={2}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaVideosFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
      />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        backdropComponent={props => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={handleCloseModalPress}
          />
        )}
        backgroundComponent={CustomBottomSheetModalBackground}
        snapPoints={[
          getBottomModalSnapPoint(selectedNasaVideoData?.description.length),
        ]}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <NasaAssetItemModal nasaAssetItemData={selectedNasaVideoData!} />
      </BottomSheetModal>
    </View>
  );
};

export default NasaVideosScreen;
