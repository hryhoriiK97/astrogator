import {
  SpaceMono,
  Typography,
} from '@astrogator/common/src/components/Typography';
import {NASA_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {axios} from '../../../../axios';
import {BackButton} from '../../../../components/BackButton';
import {ApodResponse} from '../../../../types/Apod';
import {HomeStackNavigationProp} from '../../Home.routes';
import {styles} from './Apod.styled';

const ApodScreen: FC = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const {
    data: apodResponse,
    isLoading: isApodLoading,
    isError: isApodError,
    refetch: apodRefetch,
    isRefetching: isApodRefetching,
  } = useQuery('Apod', () =>
    axios.get(`/planetary/apod?api_key=${NASA_API_KEY}`),
  );

  if (isApodLoading || isApodRefetching) {
    return <ActivityIndicator />;
  }

  const apodData: ApodResponse = apodResponse?.data;

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isApodRefetching}
            onRefresh={() => {
              apodRefetch({queryKey: 'Apod'});
            }}
          />
        }
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <Image style={styles.image} source={{uri: apodData.hdurl}} />
        <View style={styles.contentWrapper}>
          <Typography variant={SpaceMono.Bold} style={styles.title}>
            {apodData.title}
          </Typography>
          <View style={styles.imageInfoWrapper}>
            <Typography variant={SpaceMono.Bold}>
              Author: {apodData.copyright}
            </Typography>
            <Typography variant={SpaceMono.Bold}>
              Date: {apodData.date}
            </Typography>
          </View>
          <Typography>{apodData.explanation}</Typography>
          <View style={styles.controlsWrapper}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ApodScreen;
