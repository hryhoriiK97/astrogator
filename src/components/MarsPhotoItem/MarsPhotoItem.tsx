import React, { FC } from "react";
import { Animated, Dimensions, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { MarsPhotoItemProps } from "./MarsPhotoItem.props";
import { styles } from "./MarsPhotoItem.styled";

const { width } = Dimensions.get("screen");

//TODO
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const MarsRoverItem: FC<MarsPhotoItemProps> = ({
  name,
  imageSource,
  roverImageSource,
  translateX,
  onPress,
  onMarsAvatarPress,
}) => {
  return (
    <View style={styles.container}>
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
      <Pressable onPress={onMarsAvatarPress} style={styles.avatarWrapper}>
        <Image source={roverImageSource} style={styles.avatar} />
      </Pressable>
    </View>
  );
};

export default MarsRoverItem;
