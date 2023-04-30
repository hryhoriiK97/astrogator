import { View, StyleSheet } from "react-native";

import { MarsRoverCard } from "./MarsRoverCard";
import { useSharedValue } from "react-native-reanimated";
import { MarsRoverItemResponse } from "../../types/MarsRoverItemResponse";
import { FC, useState } from "react";
import { MarsRoversProps } from "./MarsRovers.props";
import {
  MarsRover,
  marsRoverImages,
} from "../../stacks/BottomTab/screens/MarsRovers/MarsRovers.utils";
import { useNavigation } from "@react-navigation/native";
import {
  RootStackNavigationProp,
} from "../../stacks/Root/Root.routes";
import { styles } from "./MarsRovers.styled";


export const MarsRovers: FC<MarsRoversProps> = ({ marsRoversData, onRoverItemPress }) => {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const shuffleBack = useSharedValue(false);

  return (
      <View style={styles.container}>
        {marsRoversData.map((rover, index) => {
          const roverItem = {
            width: 300,
            height: 541,
            source: marsRoverImages[rover.name.toLowerCase() as MarsRover],
          };
          return (
            <MarsRoverCard
              card={roverItem}
              key={index * 10}
              onPress={() => {
                onRoverItemPress(rover);
                // handlePresentModalPress();
                // setSelectedRover(rover);
                // navigate(RootStackRoutes.MarsRoversPhotosStack, {
                //   screen: "MarsRoverPhotosScreen",
                //   params: {
                //     rover: rover,
                //   },
                // });
              }}
              index={index}
              shuffleBack={shuffleBack}
            />
          );
        })}
      </View>
  );
};
