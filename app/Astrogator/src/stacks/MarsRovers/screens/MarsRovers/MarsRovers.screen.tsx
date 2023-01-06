import {
  Divider,
  DividerVariant,
  MarsRoverItem,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {useQuery} from 'react-query';
import BgImage from '../../../../../assets/images/bg-image.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
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

  if (isMarsRoversLoading || isMarsRoversRefetching) {
    return <ActivityIndicator />;
  }

  const marsRovesData: MarsRoverItemResponse[] = marsRovesResponse?.data.rovers;

  const renderItem = ({item}: {item: MarsRoverItemResponse}) => {
    return (
      <MarsRoverItem
        name={item.name}
        imageSource={marsRoverImages[item.name.toLowerCase() as MarsRover]}
        onPress={() =>
          navigate(MarsRoversStackRoutes.MarsRoverPhotosScreen, {
            rover: item,
          })
        }
        //TODO
        onLongPress={console.log}
      />
    );
  };

  const renderItemSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
  };

  return (
    <ImageBackground
      source={Image.resolveAssetSource(BgImage)}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <Typography style={styles.title}>Mars Rovers</Typography>
          }
          data={marsRovesData}
          renderItem={renderItem}
          bounces={false}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MarsRoversScreen;
