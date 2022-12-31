import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import VideoPlayer from 'react-native-media-console';
import Orientation from 'react-native-orientation-locker';
import type Video from 'react-native-video';
import {Arrow} from '../../../../../assets/svgs/Arrow';

import {SpaceMono, Typography} from '@astrogator/common';
import {VideoPlayerStackParamList} from '../../VideoPlayer.routes';
import {styles} from './VideoPlayer.styled';

const VideoPlayerScreen: FC = () => {
  const navigator = useNavigation();
  const route =
    useRoute<RouteProp<VideoPlayerStackParamList, 'VideoPlayerScreen'>>();

  const {videoUri} = route.params;
  const videoRef = useRef<Video>(null);
  const [errorOccurred, setErrorOccurred] = useState(false);
  /**
   * loading !== readyToDisplay
   * by separating these two states,
   * it handles a sporadic issue in the react-native-video library,
   * where the video was loaded but the screen remains blank.
   * @see https://github.com/react-native-video/react-native-video/issues/2416
   */
  const [readyToDisplay, setReadyToDisplay] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * The device orientation is locked after the <Video> component is rendered.
   * Lifting this operation out of the LiveVideoPlayer component
   * caused sporadic issues with the component's dimensions.
   */
  useEffect(() => {
    if (videoRef.current) Orientation.lockToLandscape();
    if (errorOccurred) Orientation.lockToPortrait();

    return () => Orientation.unlockAllOrientations();
  }, [errorOccurred]);

  /**
   * Handles error state with timeout when video isn't ready to play after 7500 milliseconds.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!readyToDisplay || !videoRef.current) {
        setErrorOccurred(true);
      }
    }, 7500);
    return () => clearTimeout(timer);
  }, [readyToDisplay]);

  if (errorOccurred) {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Typography variant={SpaceMono.Bold} style={styles.errorHeading}>
            An error occurred during video loading.
          </Typography>
          <Typography style={styles.subText}>Try again later.</Typography>
          <TouchableOpacity
            style={styles.goBackButtonContainer}
            onPress={() => navigator.goBack()}>
            <Arrow fillColor={'#ffffff'} />
            <Typography style={styles.goBackText}>Go Back</Typography>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Loader */}
      <ActivityIndicator
        size="large"
        style={[
          styles.activityIndicator,
          {display: !loading && readyToDisplay ? 'none' : 'flex'},
        ]}
      />
      {/* Player */}
      <VideoPlayer
        videoRef={videoRef}
        preferredForwardBufferDuration={5}
        source={{uri: videoUri}}
        hideShutterView={true}
        onReadyForDisplay={() => setReadyToDisplay(true)}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        onError={() => {
          setErrorOccurred(true);
        }}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={'contain'}
        paused={!readyToDisplay}
        stereoPan={0.0}
        playInBackground={false}
        navigator={navigator}
        onEnd={() => navigator.goBack()}
      />
    </View>
  );
};

export default VideoPlayerScreen;
