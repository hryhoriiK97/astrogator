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
import NasaAssetItemModal from '../../../../components/NasaAssetItemModal/NasaAssetItemModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {
  NasaAssetItemData,
  NasaAssetItemResponse,
} from '../../../../types/NasaAssetItemResponse';
import {NasaImagesStackNavigationProp} from '../../NasaImages.routes';
import {styles} from './NasaImages.styled';

enum NasaImagesScreenQueryKey {
  NasaImages = 'NasaImages',
}

const NasaImagesScreen: FC = () => {
  const navigation = useNavigation<NasaImagesStackNavigationProp>();
  const {
    data: imagesResponse,
    isLoading: isImagesLoading,
    isError: isImagesRoversError,
    refetch: imagesRefetch,
    isRefetching: isImagesRefetching,
  } = useQuery(NasaImagesScreenQueryKey.NasaImages, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=image`),
  );

  const [selectedNasaImageData, setSelectedNasaImageData] =
    useState<NasaAssetItemData | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  if (isImagesLoading || isImagesRefetching) {
    return <LoadingScreen />;
  }

  const nasaImagesData: NasaAssetItemResponse[] =
    imagesResponse?.data.collection.items;

  const renderItem = ({item}: {item: NasaAssetItemResponse}) => {
    const [imagePreview] = item.links;
    return (
      <NasaAssetItem
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
        title={item.data[0].title}
        onPress={() => {
          navigation.navigate('FullImageStack', {
            screen: 'FullImageScreen',
            params: {
              photoUri: imagePreview.href,
            },
          });
        }}
        onLongPress={() => {
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
        snapPoints={[
          selectedNasaImageData &&
          selectedNasaImageData.description.length > 150
            ? '50%'
            : '40%',
        ]}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <NasaAssetItemModal nasaAssetItemData={selectedNasaImageData!} />
      </BottomSheetModal>
    </View>
  );
};

export default NasaImagesScreen;
