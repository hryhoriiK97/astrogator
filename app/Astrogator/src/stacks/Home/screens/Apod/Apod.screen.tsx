import {
  SpaceMono,
  Typography,
} from '@astrogator/common/src/components/Typography';
import {NASA_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import {format, isFuture, isToday} from 'date-fns';
import React, {FC, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useQuery} from 'react-query';
import {axios} from '../../../../axios';
import {BackButton} from '../../../../components/BackButton';
import {ApodResponse} from '../../../../types/Apod';
import {HomeStackNavigationProp} from '../../Home.routes';
import {styles} from './Apod.styled';

enum ApodScreenQueryKey {
  Apod = 'apod',
}

const ApodScreen: FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation<HomeStackNavigationProp>();

  const {
    data: apodResponse,
    isLoading: isApodLoading,
    isError: isApodError,
    refetch: apodRefetch,
    isRefetching: isApodRefetching,
  } = useQuery(ApodScreenQueryKey.Apod, () =>
    axios.get(
      `/planetary/apod?api_key=${NASA_API_KEY}${
        !isToday(selectedDate) && !isFuture(selectedDate)
          ? '&date=' + format(selectedDate, 'yyyy-MM-dd')
          : ''
      }`,
    ),
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
              apodRefetch({queryKey: ApodScreenQueryKey.Apod});
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
              Author: {apodData.copyright || '-'}
            </Typography>
            <Typography variant={SpaceMono.Bold}>
              Date: {apodData.date}
            </Typography>
          </View>
          <Typography>{apodData.explanation}</Typography>
          <View style={styles.controlsWrapper}>
            <BackButton onPress={() => navigation.goBack()} />
            <Pressable
              onPress={() => setShowDatePicker(true)}
              style={styles.pickButton}>
              <Typography variant={SpaceMono.Bold} style={styles.pickTitle}>
                Pick APOD Date
              </Typography>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/*@ts-ignore*/}
      <DatePicker
        modal
        mode={'date'}
        androidVariant={'iosClone'}
        minimumDate={new Date('1995-06-16')}
        open={showDatePicker}
        date={selectedDate}
        maximumDate={new Date()}
        onConfirm={async (date: Date) => {
          setShowDatePicker(false);
          await setSelectedDate(date);
          await apodRefetch({queryKey: ApodScreenQueryKey.Apod});
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </>
  );
};

export default ApodScreen;
