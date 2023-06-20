import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { NASA_ASSETS_HEADER_HEIGHT } from "./NasaAssetsHeader.styled";

export const useNasaAssetsHeader = (scrollY: Animated.SharedValue<number>) => {
  const headerY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentScrollY = event.contentOffset.y;
      // if (currentScrollY < 0) {
      //   headerY.value = withTiming(-NASA_ASSETS_HEADER_HEIGHT);
      // }
      if (
        (currentScrollY <= 0 && scrollY.value <= 0) ||
        currentScrollY <= scrollY.value
      ) {
        // User is scrolling up
        headerY.value = withTiming(0);
      } else {
        // User is scrolling down
        headerY.value = withTiming(-NASA_ASSETS_HEADER_HEIGHT);
      }
      scrollY.value = currentScrollY;
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: headerY.value }],
    };
  });

  return {
    animatedHeaderStyle,
    scrollHandler,
  };
};
