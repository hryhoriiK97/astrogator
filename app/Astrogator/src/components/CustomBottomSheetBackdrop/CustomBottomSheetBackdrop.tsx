import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomBottomSheetBackdrop = ({
  animatedIndex,
  style,
  onPress,
}: BottomSheetBackdropProps & {onPress: () => void}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0.95, 1],
      [0.95, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(0,0,0,0.4)',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return <AnimatedPressable onPress={onPress} style={containerStyle} />;
};

export default CustomBottomSheetBackdrop;
