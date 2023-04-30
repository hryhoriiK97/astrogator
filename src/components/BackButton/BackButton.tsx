import { Typography, Raleway } from "../Typography";
import React, { FC } from "react";
import { Pressable } from "react-native";
import { Arrow } from "../../../assets/svgs/Arrow";
import { AstrogatorColor } from "../../theming/theme";
import { BackButtonProps } from "./BackButton.props";
import { styles } from "./BackButton.styled";

const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <Arrow fillColor={AstrogatorColor.White} />
      <Typography
        variant={Raleway.Medium}
        style={styles.backButtonTitle}
        color={AstrogatorColor.White}
      >
        Back
      </Typography>
    </Pressable>
  );
};

export default BackButton;
