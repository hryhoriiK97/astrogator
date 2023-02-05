import {LoadingScreen, NasaAssetItem} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useCallback, useRef, useState} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {NasaAssetItemModal} from '../../../../components/NasaAssetItemModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {
  NasaAssetItemData,
  NasaAssetItemResponse,
} from '../../../../types/NasaAssetItemResponse';
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
    isError: isNasaVideosRoversError,
    refetch: nasaVideosRefetch,
    isRefetching: isNasaVideosRefetching,
  } = useQuery(NasaVideosScreenQueryKey.NasaVideos, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=video`),
  );

  const [selectedNasaVideoData, setSelectedNasaVideoData] =
    useState<NasaAssetItemData | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  if (isNasaVideosLoading || isNasaVideosRefetching) {
    return <LoadingScreen />;
  }

  const nasaVideosData: NasaAssetItemResponse[] =
    nasaVideosResponse?.data.collection.items;

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
        snapPoints={['50%']}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <NasaAssetItemModal nasaAssetItemData={selectedNasaVideoData!} />
      </BottomSheetModal>
    </View>
  );
};

export default NasaVideosScreen;
