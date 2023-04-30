import React from "react";
import { Text } from "react-native";
import { Raleway, TypographyProps } from "./Typography.props";
import { styles } from "./Typography.styled";

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = Raleway.Bold,
  style: customStyles,
  ...textProps
}) => {
  return (
    <Text
      style={[styles(variant, textProps.color).text, customStyles]}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default Typography;
