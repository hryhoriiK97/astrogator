import { Raleway, Typography } from "../Typography";
import React, { FC } from "react";
import { View } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { HomeTileModalProps } from "./HomeTileModal.props";
import { styles } from "./HomeTileModal.styled";

const HomeTileModal: FC<HomeTileModalProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.White}
        style={styles.title}
      >
        {title}
      </Typography>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.White}
        style={styles.description}
      >
        {description}
      </Typography>
    </View>
  );
};

export default HomeTileModal;
