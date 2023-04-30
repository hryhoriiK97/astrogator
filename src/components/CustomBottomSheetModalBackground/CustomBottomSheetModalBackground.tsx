import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

const CustomBottomSheetModalBackground: React.FC<
  BottomSheetBackgroundProps
> = ({ style, animatedIndex }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0.95, 1],
      ["rgba(0,0,0,0.9)", "rgba(0,0,0,1)"]
    ),
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );

  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default CustomBottomSheetModalBackground;
