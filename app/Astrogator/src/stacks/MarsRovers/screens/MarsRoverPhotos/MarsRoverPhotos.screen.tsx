import {
  Divider,
  DividerVariant,
  getRelativeUnits,
  LoadingScreen,
  MarsRoverPhotoItem,
  SpaceMono,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {Pressable, StatusBar, TextInput, View} from 'react-native';
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

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = 'MarsRoverPhotos',
}

const {bp} = getRelativeUnits();

const MarsRoverPhotosScreen: FC = () => {
  const flashListRef = useRef<FlashList<MarsRoverPhotoItemResponse>>(null);
  const {goBack} = useNavigation<MarsRoversStackNavigationProp>();

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

  console.log(Array.from(Array(rover.max_sol).keys()));

  const renderItem = ({item}: {item: MarsRoverPhotoItemResponse}) => {
    return (
      /*//TODO: Find better solution*/
      <View style={styles().renderItemWrapper}>
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
      <View style={styles().wrapper}>
        <StatusBar barStyle="light-content" />
        <FlashList
          ref={flashListRef}
          ListHeaderComponent={
            <>
              <MarsRoverPhotosHeader rover={rover} onBackButtonPress={goBack} />
              <Pressable onPress={handlePresentModalPress}>
                <Typography color={AstrogatorColor.White}>Open</Typography>
              </Pressable>
            </>
          }
          ListFooterComponent={<View style={styles().footer} />}
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
          <View style={styles().modalContainer}>
            <Typography
              style={styles().pickerTitle}
              variant={SpaceMono.Bold}
              color={AstrogatorColor.White}>
              Type Mars Sol
            </Typography>
            <TextInput
              onChangeText={e => setCurrentMarsSol(Number(e))}
              style={styles().solInput}
            />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default MarsRoverPhotosScreen;
