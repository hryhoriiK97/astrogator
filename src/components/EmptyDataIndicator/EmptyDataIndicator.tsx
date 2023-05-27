import React, { FC } from "react";
import { Platform, Pressable, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { Raleway, Typography } from "../Typography";
import { styles } from "./EmptyDataIndicator.styled";
import { EmptyDataIndicatorProps } from "./EmptyDataIndicator.props";
import { Spacer, SpacerVariant } from "../Spacer";
import { MobilePlatform } from "../../enums/MobilePlatform";

const EmptyDataIndicator: FC<EmptyDataIndicatorProps> = ({
  onRefreshButtonPress,
}) => {
  return (
    <BlurView
      blurType="dark"
      blurAmount={Platform.OS === MobilePlatform.IOS ? 0.5 : 15}
      style={styles.blurView}
    >
      <View style={styles.container}>
        <View>
          <Typography variant={Raleway.Regular} style={styles.title}>
            {"Ooops... Something went wrong."}
          </Typography>
          <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
          <Typography variant={Raleway.Light} style={styles.subtitle}>
            {"Try to refresh the page"}
          </Typography>
        </View>
        <Pressable style={styles.refreshButton} onPress={onRefreshButtonPress}>
          <Typography style={styles.refreshButtonTitle}>{"Refresh"}</Typography>
        </Pressable>
      </View>
    </BlurView>
  );
};

export default EmptyDataIndicator;
