import React, { FC } from "react";
import { View } from "react-native";
import { Image, ImageStyle } from "expo-image";

import { SafeImageProps } from "./SafeImage.props";
import { styles } from "./SafeImage.styled";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const SafeImage: FC<SafeImageProps> = ({
  source,
  defaultSource,
  imageStyle,
  imageWrapperStyle,
  isBlurashApplied,
}) => {
  return (
    <View style={[styles.imageWrapper, imageWrapperStyle]}>
      <Image
        style={[styles.image, imageStyle as ImageStyle]}
        source={source}
        placeholderContentFit={"cover"}
        placeholder={
          isBlurashApplied
            ? blurhash
            : !!defaultSource
            ? defaultSource
            : undefined
        }
        contentFit={"cover"}
        cachePolicy={"memory-disk"}
      />
    </View>
  );
};

export default SafeImage;
