import { Typography } from "../../../../components";
import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { styles } from "./AboutApp.styled";

const AboutAppScreen: FC = () => {
  return (
    <View style={styles.screenView}>
      <Typography style={{ color: AstrogatorColor.White }}>
        About App
      </Typography>
      <Pressable>
        <Typography>Rate App</Typography>
      </Pressable>
    </View>
  );
};

export default AboutAppScreen;
