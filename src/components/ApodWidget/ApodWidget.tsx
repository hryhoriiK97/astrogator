import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { Chevron } from "../../../assets/svgs/Chevron";
import { Image } from "expo-image";
import { Typography } from "../Typography";
import { ApodWidgetProps } from "./ApodWidget.props";
import { styles } from "./ApodWidget.styled";
import { SharedElement } from "react-navigation-shared-element";

const ApodWidget: FC<ApodWidgetProps> = ({
  id,
  imageSource,
  title,
  date,
  author,
  onPress,
  onLongPress,
}) => {
  console.log(id, "ID");
  return (
    <View style={styles.apodWidgetContainer}>
      <SharedElement id={id!} style={styles.image}>
        <Image
          style={styles.image}
          source={imageSource}
          placeholder={require("../../../assets/splash.png")}
          cachePolicy={"memory"}
        />
      </SharedElement>
      <Pressable
        style={styles.innerWrapper}
        onPress={onPress}
        onLongPress={() => {
          if (onLongPress) {
            onLongPress();
          }
        }}
      >
        <View style={styles.titleWrapper}>
          <Typography style={styles.title}>{title}</Typography>
        </View>
        <View style={styles.apodInfoWrapper}>
          <View style={styles.dateAuthorInfo}>
            <Typography
              style={styles.infoTitle}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              Author: {author ? author : " -"}
            </Typography>
            <Typography style={styles.infoTitle}>Date: {date}</Typography>
          </View>
          <View style={styles.moreInfoButton}>
            <Chevron />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ApodWidget;
