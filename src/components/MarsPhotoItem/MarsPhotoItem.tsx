import React, { FC } from "react";
import { Animated, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { MarsPhotoItemProps } from "./MarsPhotoItem.props";
import { Arrow } from "../../../assets/svgs/Arrow";
import { List } from "../../../assets/svgs/List";
import { styles } from "./MarsPhotoItem.styled";
import { Raleway, Typography } from "../Typography";
import { Spacer, SpacerVariant } from "../Spacer";
import { AstrogatorColor } from "../../theming/theme";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const MarsRoverItem: FC<MarsPhotoItemProps> = ({
  name,
  cameraFullName,
  cameraAbbreviation,
  imageSource,
  roverImageSource,
  translateX,
  onPress,
  onBackButtonPress,
  onListButtonPRess,
  onMarsAvatarPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={onBackButtonPress}>
          <Arrow fillColor={AstrogatorColor.Black} />
        </Pressable>
        <View style={styles.roverNameWrapper}>
          <Typography
            variant={Raleway.Bold}
            style={styles.roverName}
          >{`${name}`}</Typography>
          <Typography
            variant={Raleway.Regular}
            style={styles.cameraInfo}
          >{`${cameraFullName} (${cameraAbbreviation})`}</Typography>
        </View>
        <Pressable style={styles.headerButton} onPress={onListButtonPRess}>
          <List />
        </Pressable>
      </View>
      <Spacer variant={SpacerVariant.Spacer_20_Vertical} />
      <View style={styles.outerWrapper}>
        <Pressable style={styles.innerWrapper} onPress={onPress}>
          <AnimatedImage
            source={imageSource}
            placeholder={blurhash}
            style={[
              styles.image,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
            cachePolicy={"memory-disk"}
          />
        </Pressable>
      </View>
      <Pressable onPress={onMarsAvatarPress} style={styles.avatarWrapper}>
        <Image
          source={roverImageSource}
          style={styles.avatar}
          cachePolicy={"memory-disk"}
        />
      </Pressable>
    </View>
  );
};

export default MarsRoverItem;
