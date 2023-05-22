import React, { FC, Fragment } from "react";
import { ContactFormSubjectsProps } from "./ContactFormSubjects.props";
import { ContactFormSubjectItem } from "./ContactFormSubjectItem";
import { View } from "react-native";
import { styles } from "./ContactFormSubjectItem.styled";
import { Spacer, SpacerVariant } from "../../../Spacer";

const ContactFormSubjects: FC<ContactFormSubjectsProps> = ({
  data,
  selectedSubject: selectedItem,
  onSubjectPress: onItemPress,
}) => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <Fragment key={item}>
        <ContactFormSubjectItem
          title={item}
          isActive={selectedItem === item}
          onItemPress={() => onItemPress(item)}
        />
        {index < data.length - 1 && (
          <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
        )}
      </Fragment>
    );
  };
  return (
    <View style={styles.container}>
      {data.map((item, index) => renderItem({ item, index }))}
    </View>
  );
};

export default ContactFormSubjects;
