import { View } from "react-native";

import { MarsRoverCard } from "./MarsRoverCard";
import { useSharedValue } from "react-native-reanimated";
import { FC } from "react";
import { MarsRoversProps } from "./MarsRovers.props";
import {
  MarsRover,
  marsRoverImages,
} from "../../stacks/BottomTab/screens/MarsRovers/MarsRovers.utils";
import { styles } from "./MarsRovers.styled";

export const MarsRovers: FC<MarsRoversProps> = ({
  marsRoversData,
  onRoverItemPress,
}) => {
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
            }}
            index={index}
            shuffleBack={shuffleBack}
          />
        );
      })}
    </View>
  );
};
