import { Typography } from "../../../../components";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "@react-native-community/blur";
import { MobilePlatform } from "../../../../enums/MobilePlatform";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { FC, useEffect } from "react";
import { ImageBackground, Platform, Pressable, View } from "react-native";
import Background from "../../../../../assets/images/Group.png";
import { Astronaut } from "../../../../../assets/svgs/Astronaut";
import { RedPlanet } from "../../../../../assets/svgs/RedPlanet";
import { SmallPlanet } from "../../../../../assets/svgs/SmallPlanet";
import { RootStackNavigationProp } from "../../Root.routes";
import { styles } from "./Welcome.styled";

const WelcomeScreen: FC = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    AsyncStorage.setItem("@wasFirstInteraction", "true");
  }, []);

  return (
    <ImageBackground
      source={Background}
      resizeMode={"cover"}
      progressiveRenderingEnabled={true}
      resizeMethod={"resize"}
      style={styles.backgroundImage}
      imageStyle={styles.image}
    >
      <View style={styles.backdropWrapper} />
      <View style={styles.innerWrapper}>
        <View style={styles.header}>
          <Typography style={styles.title}>Astrogator</Typography>
          <Typography style={styles.subtitle}>
            Explore space managing updates directly form NASA
          </Typography>
        </View>
        <RedPlanet style={styles.redPlanet} />
        <SmallPlanet style={styles.smallPlanet} />
        <Astronaut style={styles.astronaut} />
        <View style={styles.footerWrapper}>
          <Typography style={styles.description}>
            Explore the vastness of space with our new mobile app! learn about
            the planets and stars, and admire stunning space photos.
          </Typography>
          <BlurView
            blurAmount={Platform.OS === MobilePlatform.IOS ? 3.5 : 10}
            blurType={"dark"}
            style={styles.blurWrapper}
          >
            <Pressable
              style={styles.discoverButton}
              onPress={() =>
                navigate("BottomTabStack", {
                  screen: "HomeStack",
                  params: { screen: "HomeScreen" },
                })
              }
            >
              <Typography style={styles.discoverButtonTitle}>
                Start Discovery
              </Typography>
            </Pressable>
          </BlurView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
