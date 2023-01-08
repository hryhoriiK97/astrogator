import {
  Divider,
  DividerVariant,
  MarsRoverItem,
  SpaceMono,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import {useQuery} from 'react-query';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import MarsRoverModal from '../../../../components/MarsRoverModal/MarsRoverModal';
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

  const snapPoints = useMemo(() => ['62%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  if (isMarsRoversLoading || isMarsRoversRefetching) {
    return <ActivityIndicator />;
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
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          enableOverDrag={false}
          enableDismissOnClose={true}>
          <MarsRoverModal rover={selectedRover!} />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default MarsRoversScreen;
