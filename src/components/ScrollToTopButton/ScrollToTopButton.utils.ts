import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const useScrollToTopButton = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const listenerId = scrollY.addListener(({ value }) => {
      if (value >= 300) {
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(buttonOpacity, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }).start();
      }
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY, buttonOpacity]);

  return {
    scrollY,
    buttonOpacity,
  };
};
