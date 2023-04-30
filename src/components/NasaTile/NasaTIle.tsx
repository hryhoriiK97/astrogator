import { Raleway, Typography } from "@astrogator/common";
import React, { FC } from "react";
import { ImageBackground, Pressable, View } from "react-native";
import { Arrow } from "../../../assets/svgs/FormArrow";
import { NasaTileProps } from "./NasaTIle.props";
import { styles } from "./NasaTIle.styled";

//TODO: implement better styling and NASA logo
const NasaTile: FC<NasaTileProps> = ({
  title,
  imageSource,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      onLongPress={() => onLongPress()}
      style={styles.container}
    >
      <ImageBackground
        style={styles.imageBackground}
        resizeMode={"cover"}
        imageStyle={styles.image}
        source={imageSource}
      >
        {title && (
          <>
            <Typography variant={Raleway.Bold} style={styles.title}>
              {title}
            </Typography>
            <View style={styles.iconWrapper}>
              <Arrow />
            </View>
          </>
        )}
      </ImageBackground>
    </Pressable>
  );
};

export default NasaTile;
