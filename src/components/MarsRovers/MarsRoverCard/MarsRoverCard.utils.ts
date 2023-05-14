import { Dimensions } from "react-native";
import { snapPoint } from "react-native-redash";

const { width } = Dimensions.get("window");

export const SNAP_POINTS = [-width, 0, width];
export const aspectRatio = 430.94 / 228.14;
export const CARD_WIDTH = width - 60;
export const CARD_HEIGHT = (CARD_WIDTH / 2.4) * aspectRatio;
// export const CARD_HEIGHT = 267;
export const IMAGE_WIDTH = CARD_WIDTH * 0.9;
