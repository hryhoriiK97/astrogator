import {LoadingScreen, NasaAssetItem, Typography} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {commonStyles} from '../../../../theming/commonStyles';
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

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

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
        onLongPress={() => {
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
        estimatedItemSize={175.5}
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
        snapPoints={snapPoints}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <Typography>Modal</Typography>
      </BottomSheetModal>
    </View>
  );
};

export default NasaImagesScreen;
