import {Typography} from '@astrogator/common';
import React, {FC, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {Arrow} from '../../../assets/svgs/Arrow';
import {AstrogatorColor} from '../../theming/theme';
import styles from './VideoPlayer.styled';
import type {VideoPlayerProps} from './VideoPlayerProps';

const VideoPlayer: FC<VideoPlayerProps> = ({videoUri, onBackPress}) => {
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

  if (errorOccurred) {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Typography style={styles.errorHeading}>
            An error occurred during video loading.
          </Typography>
          <Typography style={styles.subText}>Try again later.</Typography>
          <TouchableOpacity
            style={styles.goBackButtonContainer}
            onPress={onBackPress}>
            <Arrow fillColor={'#ffffff'} />
            <Typography style={styles.goBackText}>Go Back</Typography>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        style={[
          styles.activityIndicator,
          {display: !loading && readyToDisplay ? 'none' : 'flex'},
        ]}
      />
      <View style={styles.goBackButtonWrapper}>
        <Pressable style={styles.goBackButton} onPress={onBackPress}>
          <Arrow />
          <Typography style={styles.goBackText} color={AstrogatorColor.White}>
            Back
          </Typography>
        </Pressable>
      </View>
      <Video
        ref={videoRef}
        preferredForwardBufferDuration={5}
        onLoad={() => {
          setLoading(true);
        }}
        source={{
          uri: videoUri,
          type: 'mp4',
        }}
        hideShutterView={true}
        paused={false} // make it start
        onVideoLoadStart={() => {
          setLoading(true);
        }}
        onVideoProgress={() => {
          setLoading(false);
        }}
        onReadyForDisplay={() => setReadyToDisplay(true)}
        style={{
          height: '100%',
          width: '100%',
        }}
        muted={false}
        playInBackground={false}
        preventsDisplaySleepDuringVideoPlayback={true}
        onError={() => {
          setErrorOccurred(true);
        }}
        fullscreen={true}
        rate={1}
        volume={1.0}
        resizeMode={'contain'}
        controls={true}
        stereoPan={0.0}
        onEnd={onBackPress}
      />
    </View>
  );
};

export default VideoPlayer;
