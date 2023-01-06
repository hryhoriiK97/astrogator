import {NASA_API_KEY} from '@env';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {useQuery} from 'react-query';
import BgImage from '../../../../../assets/images/bg-image.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {MarsRoverItem} from '../../../../types/MarsRoverItem';
import {styles} from './MarsRoverPhotos.styled';

enum MarsRoverPhotosQueryKey {
  MarsRovers = 'MarsRovers',
}

const MarsRoverPhotosScreen: FC = () => {
  const {
    data: marsRovesResponse,
    isLoading: isMarsRoversLoading,
    isError: isMarsRoversError,
    refetch: marsRoversRefetch,
    isRefetching: isMarsRoversRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRovers, () =>
    apodAxiosInstance.get(`/mars-photos/api/v1/rovers?api_key=${NASA_API_KEY}`),
  );

  if (isMarsRoversLoading || isMarsRoversRefetching) {
    return <ActivityIndicator />;
  }

  const marsRovesData: MarsRoverItem[] = marsRovesResponse?.data;

  console.log(marsRovesData);

  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        {/*<FlatList*/}
        {/*  data={marsRoverPhotosData}*/}
        {/*  renderItem={({item}) => {*/}
        {/*    console.log(item.img_src);*/}
        {/*    return (*/}
        {/*      <View style={{position: 'relative'}}>*/}
        {/*        <FastImage*/}
        {/*          style={{width: 200, height: 200}}*/}
        {/*          source={{uri: item.img_src.replace('http', 'https')}}*/}
        {/*          // defaultSource={require('../../../../../assets/images/mars-rover-bg.webp')}*/}
        {/*        />*/}
        {/*      </View>*/}
        {/*    );*/}
        {/*  }}*/}
        {/*/>*/}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MarsRoverPhotosScreen;
