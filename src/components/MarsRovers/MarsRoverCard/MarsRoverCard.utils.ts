import { Dimensions } from "react-native";
import { snapPoint } from "react-native-redash";

const { width: wWidth } = Dimensions.get("window");

export const SNAP_POINTS = [-wWidth, 0, wWidth];
export const aspectRatio = 430.94 / 228.14;
export const CARD_WIDTH = wWidth - 150;
export const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
export const IMAGE_WIDTH = CARD_WIDTH * 0.9;
