import {
  Divider,
  DividerVariant,
  getRelativeUnits,
  LoadingScreen,
  MarsRoverPhotoItem,
  SafeInputTypeCheck,
  SafeTextInput,
  SpaceMono,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {useQuery} from 'react-query';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {MarsRoverPhotosHeader} from '../../../../components/MarsRoverPhotosHeader';
import {AstrogatorColor} from '../../../../theming/theme';
import {MarsRoverPhotoItemResponse} from '../../../../types/MarsRoverPhotoItemResponse';
import {replaceHttpWithHttps} from '../../../../utils';
import {
  MarsRoversStackNavigationProp,
  MarsRoversStackParamList,
} from '../../MarsRovers.routes';
import {styles} from './MarsRoverPhotos.styled';
import {inputErrorTexts} from './MarsRoverPhotos.utils';

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = 'MarsRoverPhotos',
}

const {bp} = getRelativeUnits();

const MarsRoverPhotosScreen: FC = () => {
  const flashListRef = useRef<FlashList<MarsRoverPhotoItemResponse>>(null);
  const {goBack} = useNavigation<MarsRoversStackNavigationProp>();

  const [isError, setIsError] = useState<boolean>(false);

  const route =
    useRoute<RouteProp<MarsRoversStackParamList, 'MarsRoverPhotosScreen'>>();
  const {rover} = route.params;

  const [currentMarsSol, setCurrentMarsSol] = useState<number>(rover.max_sol);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const {
    data: marsRoverPhotosResponse,
    isLoading: isMarsRoverPhotosLoading,
    isError: isMarsRoverPhotosError,
    refetch: marsRoverPhotosRefetch,
    isRefetching: isMarsRoverPhotosRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRoverPhotos, () =>
    apodAxiosInstance.get(
      `/mars-photos/api/v1/rovers/${rover.name.toLowerCase()}/photos?sol=${currentMarsSol}&api_key=${NASA_API_KEY}`,
    ),
  );

  if (isMarsRoverPhotosLoading || isMarsRoverPhotosRefetching) {
    return <LoadingScreen />;
  }

  const marsRoverPhotosData: MarsRoverPhotoItemResponse[] =
    marsRoverPhotosResponse?.data.photos;

  const renderItem = ({item}: {item: MarsRoverPhotoItemResponse}) => {
    return (
      /*//TODO: Find better solution*/
      <View style={styles.renderItemWrapper}>
        <MarsRoverPhotoItem
          imageSource={{uri: replaceHttpWithHttps(item.img_src)}}
          defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
          cameraFullName={item.camera.full_name}
          cameraAbbreviation={item.camera.name}
          earthData={item.earth_date}
          sol={item.sol}
        />
      </View>
    );
  };

  const renderSeparatorItem = () => {
    return <Divider variant={DividerVariant.Divider_15_Vertical} />;
  };

  return (
    <>
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <FlashList
          ref={flashListRef}
          ListHeaderComponent={
            <MarsRoverPhotosHeader
              rover={rover}
              onBackButtonPress={goBack}
              onFilterButtonPress={handlePresentModalPress}
            />
          }
          ListFooterComponent={<View style={styles.footer} />}
          data={marsRoverPhotosData}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparatorItem}
          estimatedItemSize={370 * bp}
        />
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
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
          <View style={styles.modalContainer}>
            <Typography
              style={styles.pickerTitle}
              variant={SpaceMono.Bold}
              color={AstrogatorColor.White}>
              Type Mars Sol
            </Typography>
            <SafeTextInput
              inputTypeCheckVariant={SafeInputTypeCheck.Number}
              setTextValue={value => setCurrentMarsSol(Number(value))}
              isError={isError}
              setIsError={setIsError}
              errorTexts={inputErrorTexts}
              maxValue={rover.max_sol}
              minValue={1}
            />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default MarsRoverPhotosScreen;
