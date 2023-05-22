import React from "react";
import { TouchableOpacity, View } from "react-native";

import { ContactFormSubjectItemProps } from "./ContactFormSubjectItem.props";
import { Typography } from "../../../../Typography";
import { styles } from "./ContactFormSubjectItem.styled";

const ContactFormSubjectItem: React.FC<ContactFormSubjectItemProps> = ({
  title,
  isActive,
  onItemPress,
}) => {
  return (
    <TouchableOpacity
      style={styles().container}
      activeOpacity={0.8}
      onPress={(): void => onItemPress()}
    >
      <View style={styles().checkbox}>
        <View style={styles(isActive).checkboxIndicator} />
      </View>
      <Typography style={styles().title}>{title}</Typography>
    </TouchableOpacity>
  );
};

export default ContactFormSubjectItem;
