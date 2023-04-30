import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { HomeIcon } from "../../../assets/svgs/tabBarIcons/HomeIcon";
import { ExploreIcon } from "../../../assets/svgs/tabBarIcons/ExploreIcon";
import { UFOIcon } from "../../../assets/svgs/tabBarIcons/UFOIcon";
import { SatelliteIcon } from "../../../assets/svgs/tabBarIcons/SatelliteIcon";
import { AstrogatorColor } from "../../theming/theme";
import NasaAssetsStack from "../NasaAssets";
import { BottomTabStackRoutes } from "./BottomTab.routes";
import AboutAppScreen from "./screens/AboutApp/AboutApp.screen";
import HomeScreen from "./screens/Home/Home.screen";
import MarsRoversScreen from "./screens/MarsRovers/MarsRovers.screen";
import Background from "../../../assets/images/Group.png";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  icon: {
    height: 36 * bp,
    width: 36 * bp,
  },
  backgroundImage: {
    position: "relative",
    backgroundColor: AstrogatorColor.Black,
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarBackground: () => (
        //   <ImageBackground
        //     source={Background}
        //     resizeMode={"cover"}
        //     progressiveRenderingEnabled={true}
        //     resizeMethod={"resize"}
        //     style={styles.backgroundImage}
        //     imageStyle={styles.imageStyle}
        //   />
        // ),

        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#F60081",
        tabBarStyle: {
          backgroundColor: AstrogatorColor.Black,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name={BottomTabStackRoutes.HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <HomeIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={BottomTabStackRoutes.MarsRoversScreen}
        options={{
          tabBarIcon: (props) => (
            <UFOIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={MarsRoversScreen}
      />
      <Tab.Screen
        name={BottomTabStackRoutes.NasaAssetsStack}
        options={{
          tabBarIcon: (props) => (
            <ExploreIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={NasaAssetsStack}
      />
      <Tab.Screen
        name={"Settings"}
        options={{
          tabBarIcon: (props) => (
            <SatelliteIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={AboutAppScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
