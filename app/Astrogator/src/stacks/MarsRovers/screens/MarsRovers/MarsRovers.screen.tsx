import {
  Divider,
  DividerVariant,
  LoadingScreen,
  MarsRoverItem,
  SpaceMono,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useQuery} from 'react-query';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {MarsRoverModal} from '../../../../components/MarsRoverModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {MarsRoverItemResponse} from '../../../../types/MarsRoverItemResponse';
import {
  MarsRoversStackNavigationProp,
  MarsRoversStackRoutes,
} from '../../MarsRovers.routes';
import {MarsRover, marsRoverImages} from '../../MarsRovers.utils';
import {styles} from './MarsRovers.styled';

enum MarsRoverPhotosQueryKey {
  MarsRovers = 'MarsRovers',
}

const MarsRoversScreen: FC = () => {
  const {navigate} = useNavigation<MarsRoversStackNavigationProp>();
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
          navigate(MarsRoversStackRoutes.MarsRoverPhotosScreen, {
            rover: item,
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
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={
          <Typography variant={SpaceMono.Bold} style={styles.title}>
            Mars Rovers
          </Typography>
        }
        data={marsRovesData}
        renderItem={renderItem}
        bounces={false}
        ItemSeparatorComponent={renderItemSeparator}
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
        <MarsRoverModal rover={selectedRover!} />
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default MarsRoversScreen;
