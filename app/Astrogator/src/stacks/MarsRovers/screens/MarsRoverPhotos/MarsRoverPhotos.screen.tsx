import {
  Divider,
  DividerVariant,
  getRelativeUnits,
  LoadingScreen,
  MarsRoverPhotoItem,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {FC, useRef} from 'react';
import {StatusBar, View} from 'react-native';
import {useQuery} from 'react-query';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {MarsRoverPhotosHeader} from '../../../../components/MarsRoverPhotosHeader';
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

  const {
    data: marsRoverPhotosResponse,
    isLoading: isMarsRoverPhotosLoading,
    isError: isMarsRoverPhotosError,
    refetch: marsRoverPhotosRefetch,
    isRefetching: isMarsRoverPhotosRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRoverPhotos, () =>
    apodAxiosInstance.get(
      `/mars-photos/api/v1/rovers/${rover.name.toLowerCase()}/photos?sol=${
        rover.max_sol
      }&api_key=${NASA_API_KEY}`,
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
    <View style={styles().wrapper}>
      <StatusBar barStyle="light-content" />
      <FlashList
        ref={flashListRef}
        ListHeaderComponent={
          <MarsRoverPhotosHeader rover={rover} onBackButtonPress={goBack} />
        }
        ListFooterComponent={<View style={styles().footer} />}
        data={marsRoverPhotosData}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparatorItem}
        estimatedItemSize={370 * bp}
      />
    </View>
  );
};

export default MarsRoverPhotosScreen;
