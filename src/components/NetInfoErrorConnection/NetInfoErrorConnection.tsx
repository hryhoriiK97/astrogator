import { Raleway, Typography } from "../Typography";
import React, { FC, useEffect } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import { ReloadIcon } from "../../../assets/svgs/ReloadIcon";
import { NetInfoErrorConnectionMask } from "../../../assets/svgs/NetInfoErrorConnectionMask";
import { Image } from "expo-image";
import { AstrogatorColor } from "../../theming/theme";
import { NetInfoErrorConnectionProps } from "./NetInfoErrorConnection.props";
import { styles } from "./NetInfoErrorConnection.styled";
import { Spacer, SpacerVariant } from "../Spacer";

const NetInfoErrorConnection: FC<NetInfoErrorConnectionProps> = ({
  onReload,
}) => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Image
        source={require("../../../assets/blackHole.png")}
        style={styles.image}
      />
      <NetInfoErrorConnectionMask style={styles.mask} />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screenView}>
          <View style={styles.contentWrapper}>
            <View style={styles.textWrapper}>
              <Typography style={styles.title} variant={Raleway.Bold}>
                No Internet Connection
              </Typography>
              <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
              <Typography style={styles.subtitle} variant={Raleway.Light}>
                Please try to check your internet connection, reload app
              </Typography>
            </View>
            <Spacer variant={SpacerVariant.Spacer_50_Vertical} />
            <Pressable style={styles.reloadButton} onPress={onReload}>
              <ReloadIcon />
              <Spacer variant={SpacerVariant.Spacer_7_Horizontal} />
              <Typography
                color={AstrogatorColor.White}
                style={styles.reloadButtonTitle}
              >
                Reload
              </Typography>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NetInfoErrorConnection;
