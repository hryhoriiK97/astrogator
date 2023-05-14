import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Heart } from "../../../../assets/svgs/Heart";
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
import { CARD_HEIGHT, SNAP_POINTS } from "./MarsRoverCard.utils";
import { snapPoint } from "react-native-redash";
import { styles } from "./MarsRoverCard.styled";
import { MarsRoverCardProps } from "./MarsRoverCard.props";
import { Raleway, Typography } from "../../Typography";
import { Spacer, SpacerVariant } from "../../Spacer";

const MarsRoverCard = ({
  card: { source, height },
  marsRoverName,
  marsStatus,
  launchDate,
  onLearnMorePress,
  onGalleryPress,
  shuffleBack,
  index,
}: MarsRoverCardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-(height + index * CARD_HEIGHT));
  useEffect(() => {
    translateY.value = withDelay(150 * index, withTiming(-190 * index));
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
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX;
      translateY.value = ctx.y + translationY;
    },
    onEnd: ({ velocityX, velocityY }, ctx) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(ctx.y, { velocity: velocityY }, () => {
        if (index === 0 && dest !== 0) {
          shuffleBack.value = true;
        }
      });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={onGestureEvent} minDist={0}>
        <Animated.View style={[styles.card, style]}>
          <Image
            source={source}
            style={styles.image}
            cachePolicy={"memory-disk"}
          >
            <View style={styles.cardHeader}>
              <View style={styles.marsRoverNameWrapper}>
                <Typography variant={Raleway.Bold} style={styles.marsRoverName}>
                  {marsRoverName}
                </Typography>
              </View>
              <Pressable
                style={styles.addToFavouritesButton}
                onPress={() => {}}
              >
                <Heart />
              </Pressable>
            </View>
            <View>
              <View>
                <Typography variant={Raleway.Bold} style={styles.detailsText}>
                  Status: {marsStatus}
                </Typography>
                <Spacer variant={SpacerVariant.Spacer_2_Vertical} />
                <Typography variant={Raleway.Bold} style={styles.detailsText}>
                  Launch Date: {launchDate}
                </Typography>
              </View>
              <Spacer variant={SpacerVariant.Spacer_5_Vertical} />
              <View style={styles.buttonsWrapper}>
                <Pressable style={styles.button} onPress={onLearnMorePress}>
                  <Typography style={styles.buttonTitle}>Learn More</Typography>
                </Pressable>
                <Spacer variant={SpacerVariant.Spacer_5_Horizontal} />
                <Pressable
                  style={[styles.button, styles.purpleButton]}
                  onPress={onGalleryPress}
                >
                  <Typography style={styles.buttonTitle}>Gallery</Typography>
                </Pressable>
              </View>
            </View>
          </Image>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default MarsRoverCard;
