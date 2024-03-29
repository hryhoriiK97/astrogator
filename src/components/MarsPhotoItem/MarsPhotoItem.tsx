import React, { FC } from "react";
import { Animated, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { MarsPhotoItemProps } from "./MarsPhotoItem.props";
import { Chevron } from "../../../assets/svgs/Chevron";
import { DatePickerIcon } from "../../../assets/svgs/DatePickerIcon";
import { List } from "../../../assets/svgs/List";
import { styles } from "./MarsPhotoItem.styled";
import { Raleway, Typography } from "../Typography";
import { Spacer, SpacerVariant } from "../Spacer";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const AnimatedImage = Animated.createAnimatedComponent(Image);
//TODO
const MarsRoverItem: FC<MarsPhotoItemProps> = ({
  name,
  cameraFullName,
  cameraAbbreviation,
  imageSource,
  translateX,
  onPress,
}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default MarsRoverItem;
