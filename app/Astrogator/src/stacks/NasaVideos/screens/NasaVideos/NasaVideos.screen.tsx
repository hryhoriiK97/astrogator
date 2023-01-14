import {LoadingScreen, NasaAssetItem, Typography} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {commonStyles} from '../../../../theming/commonStyles';
import {NasaImageItemResponse} from '../../../../types/NasaImageItemResponse';
import {NasaAssetsStackNavigationProp} from '../../../NasaAssets/NasaAssets.routes';
import {styles} from './NasaVideos.styled';

enum NasaVideosScreenQueryKey {
  NasaVideos = 'NasaVideos',
}

const NasaVideosScreen: FC = () => {
  const navigation = useNavigation<NasaAssetsStackNavigationProp>();
  const {
    data: nasaVideosResponse,
    isLoading: isNasaVideosLoading,
    isError: isNasaVideosRoversError,
    refetch: nasaVideosRefetch,
    isRefetching: isNasaVideosRefetching,
  } = useQuery(NasaVideosScreenQueryKey.NasaVideos, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=video`),
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '75%', '95%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  if (isNasaVideosLoading || isNasaVideosRefetching) {
    return <LoadingScreen />;
  }

  const nasaVideosData: NasaImageItemResponse[] =
    nasaVideosResponse?.data.collection.items;

  const renderItem = ({item}: {item: NasaImageItemResponse}) => {
    const [imagePreview] = item.links;
    return (
      <NasaAssetItem
        imageSource={{uri: imagePreview.href}}
        defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
        title={item.data[0].title}
        onPress={() => {
          navigation.navigate('SelectedVideo', {
            videoCollectionUri: item.href,
          });
        }}
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
        data={nasaVideosData}
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

export default NasaVideosScreen;
