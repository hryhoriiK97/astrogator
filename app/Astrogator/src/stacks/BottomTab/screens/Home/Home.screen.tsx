import {
  ApodWidget,
  Divider,
  DividerVariant,
  getRelativeUnits,
  LoadingScreen,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {format, subDays} from 'date-fns';
import React, {FC} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {useQuery} from 'react-query';
import Background from '../../../../../assets/images/Group.png';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {EmptySpace} from '../../../../components/EmptySpace';
import {HomeHeader} from '../../../../components/HomeHeader';
import {ApodResponse} from '../../../../types/ApodResponse';
import {RootStackNavigationProp} from '../../../Root/Root.routes';
import {styles} from './Home.styled';

const {bp} = getRelativeUnits();

enum HomeScreenQueryKey {
  Apod = 'Apod',
}

const HomeScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {
    data: apodResponse,
    isLoading: isApodLoading,
    isError: isApodError,
    refetch: apodRefetch,
    isRefetching: isApodRefetching,
  } = useQuery(HomeScreenQueryKey.Apod, () =>
    apodAxiosInstance.get(
      `/planetary/apod?start_date=${format(
        subDays(new Date(), 5),
        'yyyy-MM-dd',
      )}&api_key=${NASA_API_KEY}`,
    ),
  );

  if (isApodLoading || isApodRefetching) {
    return <LoadingScreen />;
  }

  const apodData: ApodResponse[] = apodResponse?.data;

  const renderItem = ({item}: {item: ApodResponse}) => {
    return (
      <ApodWidget
        imageSource={{uri: item.hdurl}}
        title={item.title}
        date={item.date}
        author={item.copyright}
        onPress={() =>
          navigation.navigate('ApodStack', {
            screen: 'ApodScreen',
            params: {
              todayApodData: item,
            },
          })
        }
      />
    );
  };

  const renderItemSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'rgba(0,0,0, 0.01)'}
        showHideTransition={'fade'}
      />
      <ImageBackground
        source={Background}
        resizeMode={'cover'}
        progressiveRenderingEnabled={true}
        resizeMethod={'resize'}
        style={styles.backgroundImage}
        imageStyle={{width: '100%', height: '100%'}}>
        <View style={styles.backdropWrapper} />
        <View style={styles.container}>
          <FlashList
            data={apodData.reverse()}
            renderItem={renderItem}
            ListHeaderComponent={<HomeHeader />}
            ListFooterComponent={<EmptySpace />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderItemSeparator}
            estimatedItemSize={200 * bp}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;
