import { Typography } from "../Typography";
import React, { FC, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Arrow } from "../../../assets/svgs/Arrow";
import { AstrogatorColor } from "../../theming/theme";
import styles from "./VideoPlayer.styled";
import type { VideoPlayerProps } from "./VideoPlayerProps";

const VideoPlayer: FC<VideoPlayerProps> = ({ videoUri, onBackPress }) => {
  const videoRef = useRef<Video>(null);
  // const [errorOccurred, setErrorOccurred] = useState(false);

  // const [readyToDisplay, setReadyToDisplay] = useState(false);
  // const [loading, setLoading] = useState(true);

  // if (errorOccurred) {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.contentContainer}>
  //         <Typography style={styles.errorHeading}>
  //           An error occurred during video loading.
  //         </Typography>
  //         <Typography style={styles.subText}>Try again later.</Typography>
  //         <TouchableOpacity
  //           style={styles.goBackButtonContainer}
  //           onPress={onBackPress}
  //         >
  //           <Arrow fillColor={"#ffffff"} />
  //           <Typography style={styles.goBackText}>Go Back</Typography>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator
        size="large"
        style={[
          styles.activityIndicator,
          { display: !loading && readyToDisplay ? "none" : "flex" },
        ]}
      /> */}
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
        
        source={{
          uri: videoUri,
        }}
        useNativeControls
        style={{
          height: "100%",
          width: "100%",
        }}
        shouldPlay
        rate={1}
        volume={1.0}
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
};

export default VideoPlayer;
