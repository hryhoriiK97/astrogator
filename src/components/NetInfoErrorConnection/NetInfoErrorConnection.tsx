import { Typography } from "../Typography";
import React, { FC } from "react";
import { Pressable, RefreshControl, ScrollView } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { NetInfoErrorConnectionProps } from "./NetInfoErrorConnection.props";
import { styles } from "./NetInfoErrorConnection.styled";

const NetInfoErrorConnection: FC<NetInfoErrorConnectionProps> = ({
  isRefreshing,
  onRefresh,
}) => {
  return (
    <ScrollView
      style={styles.screenView}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <Typography style={styles.title}>
        Check your internet connection
      </Typography>
      <Pressable style={styles.reloadButton} onPress={onRefresh}>
        <Typography color={AstrogatorColor.White}>Reload</Typography>
      </Pressable>
    </ScrollView>
  );
};

export default NetInfoErrorConnection;
