import {Divider, DividerVariant, MarsRoverPhotoItem} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import BgImage from '../../../../../assets/images/bg-image.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {MarsRoverPhotosHeader} from '../../../../components/MarsRoverPhotosHeader';
import {MarsRoverPhotoItemResponse} from '../../../../types/MarsRoverPhotoItemResponse';
import {replaceHttpWithHttps} from '../../../../utils/replaceHttpWithHttps';
import {
  MarsRoversStackNavigationProp,
  MarsRoversStackParamList,
} from '../../MarsRovers.routes';
import {styles} from './MarsRoverPhotos.styled';

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = 'MarsRoverPhotos',
}

const MarsRoverPhotosScreen: FC = () => {
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
    <ActivityIndicator />;
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
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles().backgroundImage}>
      <StatusBar barStyle="light-content" />
      <FlatList
        ListHeaderComponent={
          <MarsRoverPhotosHeader rover={rover} onBackButtonPress={goBack} />
        }
        data={marsRoverPhotosData}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparatorItem}
      />
    </ImageBackground>
  );
};

export default MarsRoverPhotosScreen;
