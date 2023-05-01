import { StyleSheet } from "react-native";
import { spacerStyle, SpacerVariant } from "./Spacer.utils";

export const styles = (variant: SpacerVariant) =>
  StyleSheet.create({
    spacer: {
      ...spacerStyle[variant],
    },
  });
