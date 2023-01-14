import {
  Divider,
  DividerVariant,
  getRelativeUnits,
  LoadingScreen,
  NasaImageItem,
} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {format} from 'date-fns';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {nasaAssetsAxiosInstance} from '../../../../api/nasaAssetsAxiosInstance';
import {NasaImageItemResponse} from '../../../../types/NasaImageItemResponse';
import {NasaImagesStackNavigationProp} from '../../NasaImages.routes';
import {styles} from './NasaImages.styled';

const {bp} = getRelativeUnits();

enum NasaImagesScreenQueryKey {
  NasaImages = 'NasaImages',
}

const NasaImagesScreen: FC = () => {
  const {navigate} = useNavigation<NasaImagesStackNavigationProp>();
  const {
    data: imagesResponse,
    isLoading: isImagesLoading,
    isError: isImagesRoversError,
    refetch: imagesRefetch,
    isRefetching: isImagesRefetching,
  } = useQuery(NasaImagesScreenQueryKey.NasaImages, () =>
    nasaAssetsAxiosInstance.get(`/search?media_type=image`),
  );

  if (isImagesLoading || isImagesRefetching) {
    return <LoadingScreen />;
  }

  const nasaImagesData: NasaImageItemResponse[] =
    imagesResponse?.data.collection.items;

  const renderItem = ({item}: {item: NasaImageItemResponse}) => {
    return (
      <NasaImageItem
        imageSource={{uri: item.links[0].href}}
        defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
        title={item.data[0].title}
        description={item.data[0].description}
        date={format(new Date(item.data[0].date_created), 'dd/MM/yyyy')}
        author={item.data[0].secondary_creator}
        onPress={() =>
          navigate('FullImageStack', {
            screen: 'FullImageScreen',
            params: {
              photoUri: item.links[0].href,
            },
          })
        }
      />
    );
  };

  const renderSeparator = () => (
    <Divider variant={DividerVariant.Divider_15_Vertical} />
  );

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaImagesData}
        renderItem={renderItem}
        estimatedItemSize={460 * bp}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default NasaImagesScreen;
