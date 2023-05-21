import { Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

export const SNAP_POINTS = [-width, 0, width];
export const aspectRatio = 430.94 / 228.14;
export const CARD_WIDTH = moderateScale(width - 60);
export const CARD_HEIGHT = (CARD_WIDTH / 2.4) * aspectRatio;
export const IMAGE_WIDTH = CARD_WIDTH * 0.9;
