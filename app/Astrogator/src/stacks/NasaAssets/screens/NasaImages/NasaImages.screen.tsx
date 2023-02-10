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
import NasaAssetItemModal from '../../../../components/NasaAssetItemModal/NasaAssetItemModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {
  NasaAssetItemData,
  NasaAssetItemResponse,
} from '../../../../types/NasaAssetItemResponse';
import {getBottomModalSnapPoint} from '../../../../utils/getBottomModalSnapPoint';
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
        return lastPage.nextPage;
      },
    },
  );

  const loadNextPageData = () => {
    if (hasNasaImagesNextPage) {
      fetchNasaImagesNextPage();
    }
  };

  const [selectedNasaImageData, setSelectedNasaImageData] =
    useState<NasaAssetItemData | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

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
      <NasaAssetItem
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.webp')}
        onPress={() => {
          navigation.navigate('FullImageStack', {
            screen: 'FullImageScreen',
            params: {
              photoUri: imagePreview.href,
              title: item.data[0].title,
            },
          });
        }}
        onMoreInfoPress={() => {
          setSelectedNasaImageData(item.data[0]);
          handlePresentModalPress();
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaImagesData}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={145}
        renderItem={renderItem}
        numColumns={2}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaImagesFetchingNextPage}
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
          getBottomModalSnapPoint(selectedNasaImageData?.description.length),
        ]}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <NasaAssetItemModal nasaAssetItemData={selectedNasaImageData!} />
      </BottomSheetModal>
    </View>
  );
};

export default NasaImagesScreen;
