import { Spacer, SpacerVariant } from "../Spacer";
import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { MagnifierIcon } from "../../../assets/svgs/MagnifierIcon";
import { ShareIcon } from "../../../assets/svgs/ShareIcon";
//TODO: Fix sharing in the project
// import {share} from '../../utils/sharing/share';
import { ImageActionsTabProps } from "./ImageActionsTab.props";
import { styles } from "./ImageActionsTab.styled";

const ImageActionsTab: FC<ImageActionsTabProps> = ({
  onMagnifierButtonPress,
}) => {
  return (
    <>
      <View style={styles.actionButtonsWrapper}>
        <Pressable
          style={styles.showMoreButton}
          onPress={() => {
            // share();
          }}
        >
          <ShareIcon />
        </Pressable>
        <Spacer variant={SpacerVariant.Spacer_3_Horizontal} />
        <Pressable
          style={styles.showMoreButton}
          onPress={onMagnifierButtonPress}
        >
          <MagnifierIcon />
        </Pressable>
      </View>
    </>
  );
};

export default ImageActionsTab;
