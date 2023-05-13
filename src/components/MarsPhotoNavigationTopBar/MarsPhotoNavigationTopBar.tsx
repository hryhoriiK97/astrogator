import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { Arrow } from "../../../assets/svgs/Arrow";
import { List } from "../../../assets/svgs/List";
import { Spacer, SpacerVariant } from "../Spacer";
import { MarsPhotoNavigationTopBarProps } from "./MarsPhotoNavigationTopBar.props";
import { styles } from "./MarsPhotoNavigationTopBar.styled";

const MarsPhotoNavigationTopBar: FC<MarsPhotoNavigationTopBarProps> = ({
  onBackButtonPress,
  onListButtonPRess,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInnerWrapper}>
        <Pressable style={styles.headerButton} onPress={onBackButtonPress}>
          <Arrow fillColor={AstrogatorColor.Black} />
        </Pressable>
        <Spacer variant={SpacerVariant.Spacer_5_Horizontal} />
        <Pressable style={styles.headerButton} onPress={onListButtonPRess}>
          <List />
        </Pressable>
      </View>
    </View>
  );
};

export default MarsPhotoNavigationTopBar;
