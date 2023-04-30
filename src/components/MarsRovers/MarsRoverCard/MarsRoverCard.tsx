import React, { useEffect } from "react";
import { Dimensions, Pressable, View } from "react-native";
import { Image } from "expo-image";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { CARD_HEIGHT, IMAGE_WIDTH, SNAP_POINTS } from "./MarsRoverCard.utils";
import { snapPoint } from "react-native-redash";
import { styles } from "./MarsRoverCard.styled";
import { MarsRoverCardProps } from "./MarsRoverCard.props";
import { Typography } from "../../Typography";

const { width } = Dimensions.get("screen");

const MarsRoverCard = ({
  card: { source, height },
  onPress,
  shuffleBack,
  index,
}: MarsRoverCardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-(height + index * CARD_HEIGHT));
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(-10 + Math.random() * 20);
  useEffect(() => {
    translateY.value = withDelay(150 * index, withTiming(0));
  }, [index, translateY]);
  useAnimatedReaction(
    () => shuffleBack.value,
    (value) => {
      if (value) {
        const duration = 150 * index;
        translateX.value = withDelay(
          duration,
          withSpring(0, {}, () => {
            shuffleBack.value = false;
          })
        );
        rotateZ.value = withDelay(
          duration,
          withSpring(-10 + Math.random() * 20)
        );
      }
    }
  );
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
      rotateZ.value = withTiming(0);
      scale.value = withTiming(1.3);
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX;
      translateY.value = ctx.y + translationY;
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(0, { velocity: velocityY });
      scale.value = withTiming(1, {}, () => {
        if (index === 0 && dest !== 0) {
          shuffleBack.value = true;
        }
      });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1500 },
      { rotateX: "15deg" },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateY: `${rotateZ.value / 10}deg` },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: scale.value },
    ],
  }));
  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={onGestureEvent} minDist={0}>
        <Animated.View style={[styles.card, style]}>
          <Image
            source={source}
            style={{
              width: "100%",
              height: (IMAGE_WIDTH * height) / width,
            }}
          />
          <Pressable onPress={onPress}>
            <Typography>Type</Typography>
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default MarsRoverCard;
