import { Typography, Raleway } from "../Typography";
import React, { FC } from "react";
import { Pressable } from "react-native";
import { Chevron } from "../../../assets/svgs/Chevron";
import { AstrogatorColor } from "../../theming/theme";
import { BackButtonProps } from "./BackButton.props";
import { styles } from "./BackButton.styled";

const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <Chevron rotate={180} />
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
