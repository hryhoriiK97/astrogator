import React, { FC, useState } from "react";
import { View } from "react-native";
import { Image, ImageStyle } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { SafeImageProps } from "./SafeImage.props";
import { styles } from "./SafeImage.styled";

const SafeImage: FC<SafeImageProps> = ({
  source,
  linearGradientColors,
  imageStyle,
  imageWrapperStyle,
  loadingIndicatorHeight = 10,
}) => {
  const [indicatorLoadingValue, setIndicatorLoadingValue] = useState(0);
  return (
    <View style={[styles({}).imageWrapper, imageWrapperStyle]}>
      <Image
        style={[styles({}).image, imageStyle as ImageStyle]}
        source={source}
        placeholderContentFit="cover"
        placeholder={require("../../../assets/splash.png")}
        contentFit={"cover"}
        onLoad={() => setIndicatorLoadingValue(100)}
        onProgress={(e) => {
          const loadedValue = (e.loaded / e.total) * 100;
          if (loadedValue > 0) {
            setIndicatorLoadingValue(loadedValue);
          }
        }}
      />
      {loadingIndicatorHeight &&
        loadingIndicatorHeight > 0 &&
        linearGradientColors && (
          <View
            style={
              styles({ loadingIndicatorHeight: loadingIndicatorHeight! })
                .imageIndicatorWrapper
            }
          >
            <LinearGradient
              colors={linearGradientColors}
              style={
                styles({ indicatorValue: indicatorLoadingValue }).indicator
              }
            />
          </View>
        )}
    </View>
  );
};

export default SafeImage;
