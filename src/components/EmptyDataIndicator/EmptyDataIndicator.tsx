import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { Raleway, Typography } from "../Typography";
import { styles } from "./EmptyDataIndicator.styled";
import { EmptyDataIndicatorProps } from "./EmptyDataIndicator.props";
import { BlurView } from "expo-blur";
import { Spacer, SpacerVariant } from "../Spacer";

const EmptyDataIndicator: FC<EmptyDataIndicatorProps> = ({
  onRefreshButtonPress,
}) => {
  return (
    <BlurView tint="light" intensity={10} style={styles.blurView}>
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
