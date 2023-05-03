import React, { FC } from "react";
import { Animated, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { MarsPhotoItemProps } from "./MarsPhotoItem.props";
import { styles } from "./MarsPhotoItem.styled";
import { Typography } from "../Typography";
import { Spacer, SpacerVariant } from "../Spacer";

const MarsRoverItem: FC<MarsPhotoItemProps> = ({
  name,
  cameraFullName,
  cameraAbbreviation,
  imageSource,
  roverImageSource,
  translateX,
  onPress,
  onMarsAvatarPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.roverNameWrapper}>
        <Typography>{`${name}`}</Typography>
        <Typography>{`${cameraFullName} (${cameraAbbreviation})`}</Typography>
      </View>
      <Spacer variant={SpacerVariant.Spacer_20_Vertical} />
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
        <Image
          source={roverImageSource}
          style={styles.avatar}
          cachePolicy={"memory"}
        />
      </Pressable>
    </View>
  );
};

export default MarsRoverItem;
