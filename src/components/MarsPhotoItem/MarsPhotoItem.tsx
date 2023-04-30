import React, { FC } from "react";
import { Animated, Dimensions, Pressable, View } from "react-native";
import { Image } from "expo-image";
//TODO: Fix haptics in the project
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// import { reactNativeHapticFeedbackOptions } from "../../config/reactNativeHapticFeedbackOptions";
import { Raleway, Typography } from "../Typography";
import { MarsPhotoItemProps } from "./MarsPhotoItem.props";
import { styles } from "./MarsPhotoItem.styled";

const { width } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const MarsRoverItem: FC<MarsPhotoItemProps> = ({
  name,
  imageSource,
  roverImageSource,
  translateX,
  onPress,
  onLongPress,
}) => {
  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={onPress}
        style={[styles.container, { width: ITEM_WITH, height: ITEM_HEIGHT }]}
        onLongPress={() => {
          //TODO: Fix haptics in the project
          // ReactNativeHapticFeedback.trigger(
          //   "impactHeavy",
          //   reactNativeHapticFeedbackOptions
          // );
          onLongPress();
        }}
      > */}
      <View style={styles.outerWrapper}>
        <View style={styles.innerWrapper}>
          <Animated.Image
            source={imageSource!}
            style={[
              styles.image,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
          />
        </View>
      </View>
      <Image source={roverImageSource} style={styles.avatar} />
      {/* </Pressable> */}
    </View>
  );
};

export default MarsRoverItem;
