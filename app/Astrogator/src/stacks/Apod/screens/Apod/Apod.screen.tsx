import {
  LoadingScreen,
  SafeImage,
  SpaceMono,
  Typography,
} from '@astrogator/common';
import {NASA_API_KEY} from '@env';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {format, isFuture, isToday} from 'date-fns';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  Pressable,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useQuery} from 'react-query';
import {Magnifier} from '../../../../../assets/svgs/Magnifier';
import {Settings} from '../../../../../assets/svgs/Settings';
import {apodAxiosInstance} from '../../../../api/apodAxiosInstance';
import {BackButton} from '../../../../components/BackButton';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {HomeTileModal} from '../../../../components/HomeTileModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {AstrogatorColor} from '../../../../theming/theme';
import {ApodResponse} from '../../../../types/ApodResponse';
import {getYouTubeVideoId} from '../../../../utils';
import {shareOnInstagramStories} from '../../../../utils/sharing/shareOnInstagramStories';
import {ApodStackNavigationProp, ApodStackParamList} from '../../Apod.routes';
import {styles} from './Apod.styled';

const YOUTUBE_PLAYER_HEIGHT = Dimensions.get('window').width * (9 / 16);

enum ApodScreenQueryKey {
  Apod = 'apod',
}

const ApodScreen: FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation<ApodStackNavigationProp>();

  const route = useRoute<RouteProp<ApodStackParamList, 'ApodScreen'>>();

  const {todayApodData} = route.params;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['85%', '95%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const {
    data: apodResponse,
    isLoading: isApodLoading,
    isError: isApodError,
    refetch: apodRefetch,
    isRefetching: isApodRefetching,
  } = useQuery(ApodScreenQueryKey.Apod, () =>
    apodAxiosInstance.get(
      `/planetary/apod?api_key=${NASA_API_KEY}${
        !isToday(selectedDate) && !isFuture(selectedDate)
          ? '&date=' + format(selectedDate, 'yyyy-MM-dd')
          : ''
      }`,
    ),
  );

  if (isApodLoading || isApodRefetching) {
    return <LoadingScreen />;
  }

  const apodData: ApodResponse = apodResponse?.data;

  return (
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
      {apodData.media_type === 'image' ? (
        <View style={styles().imageWrapper}>
          <SafeImage
            source={{
              uri: apodData.hdurl,
            }}
            defaultSource={require('../../../../../assets/images/apod-tile.webp')}
            loadingIndicatorHeight={3}
            linearGradientColors={[
              AstrogatorColor.VenetianNights,
              AstrogatorColor.VenetianNights,
            ]}
          />
          <BackButton onPress={() => navigation.goBack()} />
        </View>
      ) : (
        <>
          <View style={styles().youtubePlayerWhiteSpace} />
          <YoutubePlayer
            height={YOUTUBE_PLAYER_HEIGHT}
            videoId={getYouTubeVideoId(apodData.url)}
          />
        </>
      )}
      <View style={styles().contentWrapper}>
        <Typography
          color={AstrogatorColor.White}
          variant={SpaceMono.Bold}
          style={styles().title}>
          {apodData.title}
        </Typography>
        <View style={styles().subheader}>
          <View style={styles().imageInfoWrapper}>
            <Typography color={AstrogatorColor.White} variant={SpaceMono.Bold}>
              Author: {apodData.copyright || '-'}
            </Typography>
            <Typography color={AstrogatorColor.White} variant={SpaceMono.Bold}>
              Date: {apodData.date}
            </Typography>
          </View>
          <View style={styles().subheaderControlsWrapper}>
            <Pressable onPress={shareOnInstagramStories}>
              <Typography>Make capture</Typography>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('FullImageStack', {
                  screen: 'FullImageScreen',
                  params: {
                    photoUri: apodData.hdurl,
                  },
                })
              }>
              <Magnifier />
            </Pressable>
            <Pressable onPress={() => setShowDatePicker(true)}>
              <Settings />
            </Pressable>
          </View>
        </View>
        <Typography
          variant={SpaceMono.Bold}
          color={AstrogatorColor.White}
          style={styles().explanation}
          ellipsizeMode={'clip'}>
          {apodData.explanation.split(' ').slice(0, 100).join(' ')}{' '}
          <Typography
            onPress={handlePresentModalPress}
            style={styles().readMoreButton}
            variant={SpaceMono.Bold}
            color={AstrogatorColor.VenetianNights}>
            read more...
          </Typography>
        </Typography>
      </View>
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
      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        backdropComponent={props => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={handleCloseModalPress}
          />
        )}
        backgroundComponent={CustomBottomSheetModalBackground}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <HomeTileModal
          title={apodData.title}
          description={apodData.explanation}
        />
      </BottomSheetModal>
    </ScrollView>
  );
};

export default ApodScreen;
