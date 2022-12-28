import {SafeImage, SpaceMono, Typography} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import {format, isFuture, isToday} from 'date-fns';
import React, {FC, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  RefreshControl,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useQuery} from 'react-query';
import ApodBackground from '../../../../../assets/images/bg.jpg';
import {Arrow} from '../../../../../assets/svgs/Arrow';
import {axios} from '../../../../axios';
import {AstrogatorColor} from '../../../../theming/theme';
import {ApodResponse} from '../../../../types/Apod';
import {ApodStackNavigationProp} from '../../Apod.routes';
import {styles} from './Apod.styled';

enum ApodScreenQueryKey {
  Apod = 'apod',
}

const ApodScreen: FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation<ApodStackNavigationProp>();

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
    <ImageBackground
      source={ApodBackground}
      blurRadius={5}
      style={{width: '100%', height: '100%'}}>
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
        style={styles().container}
        contentContainerStyle={styles().contentContainerStyle}>
        <View style={styles().imageWrapper}>
          <SafeImage
            source={{
              uri: apodData.hdurl,
            }}
            defaultSource={require('../../../../../assets/images/apod-tile.jpg')}
            linearGradientColors={['#000428', '#004e92']}
          />
          <TouchableOpacity
            style={styles().backButton}
            onPress={() => navigation.goBack()}>
            <Arrow />
            <Typography
              style={styles().backButtonTitle}
              color={AstrogatorColor.White}>
              Back
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={styles().contentWrapper}>
          <Typography
            color={AstrogatorColor.White}
            variant={SpaceMono.Bold}
            style={styles().title}>
            {apodData.title}
          </Typography>
          <View style={styles().imageInfoWrapper}>
            <Typography color={AstrogatorColor.White} variant={SpaceMono.Bold}>
              Author: {apodData.copyright || '-'}
            </Typography>
            <Typography color={AstrogatorColor.White} variant={SpaceMono.Bold}>
              Date: {apodData.date}
            </Typography>
          </View>
          <Typography color={AstrogatorColor.White}>
            {apodData.explanation}
          </Typography>
          <Pressable
            onPress={() => setShowDatePicker(true)}
            style={styles().pickButton}>
            <Typography variant={SpaceMono.Bold} style={styles().pickTitle}>
              Pick APOD Date
            </Typography>
          </Pressable>
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
    </ImageBackground>
  );
};

export default ApodScreen;
