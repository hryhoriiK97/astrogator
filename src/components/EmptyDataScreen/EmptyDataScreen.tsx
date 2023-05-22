import React, { FC } from "react";
import { View } from "react-native";
import { Raleway, Typography } from "../Typography";
import { styles } from "./EmptyDataScreen.styled";
import { EmptyDataScreenProps } from "./EmptyDataScreen.props";

const EmptyDataScreen: FC<EmptyDataScreenProps> = ({ text }) => {
  return (
    <View style={styles.screen}>
      <Typography variant={Raleway.Bold} style={styles.text}>
        {text}
      </Typography>
    </View>
  );
};

export default EmptyDataScreen;
