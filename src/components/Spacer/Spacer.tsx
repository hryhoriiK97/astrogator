import React, { FC } from "react";
import { View } from "react-native";
import { SpacerProps } from "./Spacer.props";
import { styles } from "./Spacer.styled";

const Spacer: FC<SpacerProps> = ({ variant }) => {
  return <View style={styles(variant).spacer} />;
};

export default Spacer;
