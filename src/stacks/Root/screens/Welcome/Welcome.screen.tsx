import { Typography } from "../../../../components";
//TODO
// import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { ImageBackground, Pressable, StatusBar, View } from "react-native";
import Background from "../../../../../assets/images/Group.png";
import { Astronaut } from "../../../../../assets/svgs/Astronaut";
import { RedPlanet } from "../../../../../assets/svgs/RedPlanet";
import { SmallPlanet } from "../../../../../assets/svgs/SmallPlanet";
import { RootStackNavigationProp } from "../../Root.routes";
import { styles } from "./Welcome.styled";

const WelcomeScreen: FC = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  return (
    <>
      <StatusBar
        translucent={true}
        showHideTransition={"fade"}
        backgroundColor={"rgba(0,0,0, 0.01)"}
      />
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
            <Pressable
              style={styles.discoverButton}
              onPress={() =>
                navigate("BottomTabStack", {
                  screen: "HomeScreen",
                })
              }
            >
              {/* <BlurView
                // blurType={"dark"}
                // blurAmount={3}
                style={styles.blurViewStyle}
              /> */}
              <Typography style={styles.discoverButtonTitle}>
                Start Discovery
              </Typography>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;
