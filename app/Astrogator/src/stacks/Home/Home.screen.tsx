import {ApodWidget, LoadingScreen} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useQuery} from 'react-query';
import {apodAxiosInstance} from '../../api/apodAxiosInstance';
import {ApodResponse} from '../../types/ApodResponse';
import {RootStackNavigationProp} from '../Root/Root.routes';
import {styles} from './Home.styled';

enum HomeScreenQueryKey {
  Apod = 'Apod',
}

const HomeScreen: FC = () => {
  const {navigate} = useNavigation<RootStackNavigationProp>();

  const {
    data: apodResponse,
    isLoading: isApodLoading,
    isError: isApodError,
    refetch: apodRefetch,
    isRefetching: isApodRefetching,
  } = useQuery(HomeScreenQueryKey.Apod, () =>
    apodAxiosInstance.get(`/planetary/apod?api_key=${NASA_API_KEY}`),
  );

  if (isApodLoading || isApodRefetching) {
    return <LoadingScreen />;
  }

  const apodData: ApodResponse = apodResponse?.data;

  return (
    <View style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <ApodWidget
          imageSource={{uri: apodData.hdurl}}
          title={apodData.title}
          date={apodData.date}
          author={apodData.copyright}
          description={apodData.explanation}
          onPress={() =>
            navigate('HomeStack', {
              screen: 'ApodStack',
              params: {
                screen: 'ApodScreen',
                params: {
                  todayApodData: apodData,
                },
              },
            })
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
