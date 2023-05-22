import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { MagnifierIcon } from "../../../assets/svgs/MagnifierIcon";
import { PlayIcon } from "../../../assets/svgs/PlayIcon";

import { ImageActionTabProps } from "./ImageActionTab.props";
import { styles } from "./ImageActionTab.styled";

const ImageActionTab: FC<ImageActionTabProps> = ({
  onButtonPress: onMagnifierButtonPress,
  type,
}) => {
  return (
    <View style={styles.actionButtonsWrapper}>
      <Pressable style={styles.button} onPress={onMagnifierButtonPress}>
        {type === "image" ? <MagnifierIcon /> : <PlayIcon />}
      </Pressable>
    </View>
  );
};

export default ImageActionTab;
