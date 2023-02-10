import {
  Divider,
  DividerVariant,
  LoadingScreen,
  MarsRoverItem,
  Raleway,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {useQuery} from 'react-query';
import Background from '../../../../../assets/images/Group.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {EmptySpace} from '../../../../components/EmptySpace';
import {MarsRoverModal} from '../../../../components/MarsRoverModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {MarsRoverItemResponse} from '../../../../types/MarsRoverItemResponse';
import {
  RootStackNavigationProp,
  RootStackRoutes,
} from '../../../Root/Root.routes';
import {styles} from './MarsRovers.styled';
import {MarsRover, marsRoverImages} from './MarsRovers.utils';

enum MarsRoverPhotosQueryKey {
  MarsRovers = 'MarsRovers',
}

const MarsRoversScreen: FC = () => {
  const {navigate} = useNavigation<RootStackNavigationProp>();
  const {
    data: marsRovesResponse,
    isLoading: isMarsRoversLoading,
    isError: isMarsRoversError,
    refetch: marsRoversRefetch,
    isRefetching: isMarsRoversRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRovers, () =>
    apodAxiosInstance.get(`/mars-photos/api/v1/rovers?api_key=${NASA_API_KEY}`),
  );
  const [selectedRover, setSelectedRover] =
    useState<MarsRoverItemResponse | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['60%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  if (isMarsRoversLoading || isMarsRoversRefetching) {
    return <LoadingScreen />;
  }

  const marsRovesData: MarsRoverItemResponse[] = marsRovesResponse?.data.rovers;

  const renderItem = ({item}: {item: MarsRoverItemResponse}) => {
    return (
      <MarsRoverItem
        name={item.name}
        imageSource={marsRoverImages[item.name.toLowerCase() as MarsRover]}
        onPress={() => {
          bottomSheetModalRef.current?.close();
          navigate(RootStackRoutes.MarsRoversPhotosStack, {
            screen: 'MarsRoverPhotosScreen',
            params: {
              rover: item,
            },
          });
        }}
        onLongPress={() => {
          setSelectedRover(item);
          handlePresentModalPress();
        }}
      />
    );
  };

  const renderItemSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
  };

  return (
    <>
      <ImageBackground
        source={Background}
        resizeMode={'cover'}
        progressiveRenderingEnabled={true}
        resizeMethod={'resize'}
        style={styles.backgroundImage}
        imageStyle={{width: '100%', height: '100%'}}>
        <View style={styles.backdropWrapper} />
        <View style={styles.innerWrapper}>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            ListFooterComponent={<EmptySpace height={170} />}
            ListHeaderComponent={
              <View style={styles.header}>
                <Typography variant={Raleway.Bold} style={styles.title}>
                  Mars Rovers
                </Typography>
                <Divider variant={DividerVariant.Divider_8_Vertical} />
                <Typography style={styles.subtitle}>
                  Explore space managing updates directly from NASA
                </Typography>
              </View>
            }
            data={marsRovesData}
            renderItem={renderItem}
            bounces={false}
            ItemSeparatorComponent={renderItemSeparator}
          />
        </View>
      </ImageBackground>
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
        <MarsRoverModal rover={selectedRover!} />
      </BottomSheetModal>
    </>
  );
};

export default MarsRoversScreen;
