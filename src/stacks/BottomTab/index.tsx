import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { HomeIcon } from "../../../assets/svgs/tabBarIcons/HomeIcon";
import { ExploreIcon } from "../../../assets/svgs/tabBarIcons/ExploreIcon";
import { UFOIcon } from "../../../assets/svgs/tabBarIcons/UFOIcon";
import { SatelliteIcon } from "../../../assets/svgs/tabBarIcons/SatelliteIcon";
import { AstrogatorColor } from "../../theming/theme";
import NasaAssetsStack from "../NasaAssets";
import { BottomTabStackRoutes } from "./BottomTab.routes";
import AboutAppScreen from "./screens/AboutApp/AboutApp.screen";
import MarsRoversScreen from "./screens/MarsRovers/MarsRovers.screen";
import HomeStack from "../Home";

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
  label: {
    fontSize: 10 * bp,
    color: AstrogatorColor.White,
    textAlign: "center",
  },
});

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: AstrogatorColor.VenetianNights,
        tabBarStyle: {
          backgroundColor: AstrogatorColor.Black,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name={BottomTabStackRoutes.HomeStack}
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
          tabBarLabel: "Home",
          tabBarLabelStyle: styles.label,
        }}
        component={HomeStack}
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
          tabBarLabel: "Mars Rovers",
          tabBarLabelStyle: styles.label,
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
          tabBarLabel: "NASA",
          tabBarLabelStyle: styles.label,
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
          tabBarLabel: "About",
          tabBarLabelStyle: styles.label,
        }}
        component={AboutAppScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
