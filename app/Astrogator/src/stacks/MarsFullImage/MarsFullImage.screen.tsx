import {Raleway, Typography} from '@astrogator/common';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ViewShot from 'react-native-view-shot';
import {InstagramIcon} from '../../../assets/svgs/socialMediasIcons/InstagramIcon';
import {shareOnInstagramStories} from '../../utils/sharing/shareOnInstagramStories';
import {MarsFullImageStackParamList} from './MarsFullImage.routes';
import {styles} from './MarsFullImage.styled';

const MarsFullImageScreen: FC = () => {
  const route =
    useRoute<RouteProp<MarsFullImageStackParamList, 'MarsFullImageScreen'>>();
  const {
    roverName,
    photoUri,
    cameraName,
    cameraAbbreviation,
    earthDate,
    marsSol,
  } = route.params;
  const [makeStories, setMakeStories] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <ViewShot
        style={styles.imageWrapper}
        captureMode={'update'}
        onCapture={async uri => {
          if (makeStories) {
            await shareOnInstagramStories(uri);
            setMakeStories(false);
          }
        }}>
        <FastImage
          style={styles.image}
          source={{uri: photoUri}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.imageInformation}>
          <Typography style={styles.title}>
            {roverName} {cameraName} ({cameraAbbreviation})
          </Typography>
          <Typography variant={Raleway.Bold} style={styles.dateTitle}>
            {`Earth Date: ${earthDate}  Mars Sol: ${marsSol}`}
          </Typography>
        </View>
      </ViewShot>
      <Pressable
        style={styles.instagramStoriesShareButton}
        onPress={() => setMakeStories(true)}>
        <InstagramIcon />
      </Pressable>
    </View>
  );
};

export default MarsFullImageScreen;
