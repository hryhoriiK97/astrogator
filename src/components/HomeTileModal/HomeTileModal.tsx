import { Raleway, Typography } from "../Typography";
import React, { FC } from "react";
import { AstrogatorColor } from "../../theming/theme";
import { HomeTileModalProps } from "./HomeTileModal.props";
import { styles } from "./HomeTileModal.styled";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const HomeTileModal: FC<HomeTileModalProps> = ({ title, description }) => {
  return (
    <BottomSheetScrollView contentContainerStyle={styles.contentContainerstyle}>
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
        overflow={"scroll"}
      >
        {description}
      </Typography>
    </BottomSheetScrollView>
  );
};

export default HomeTileModal;
