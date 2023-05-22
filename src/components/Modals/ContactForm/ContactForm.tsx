import React, { FC, useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { ContactFormProps } from "./ContactForm.props";
import { styles } from "./ContactForm.styled";
import { Raleway, Typography } from "../../Typography";
import { Spacer, SpacerVariant } from "../../Spacer";
import { ContactFormSubjects } from "./ContactFormSubjects";

const CONTACT_FORM_DROPDOWN_ITEMS = [
  "Suggestion",
  "Issue with app",
  "Collaboration",
];

const ContactForm: FC<ContactFormProps> = ({
  isVisible,
  onCloseModal,
  onWriteEmailButtonPress,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(
    undefined
  );
  return (
    <View style={styles.outerWrapper}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isVisible}
        onDismiss={() => onCloseModal()}
        style={{ backgroundColor: "red" }}
        onRequestClose={() => onCloseModal()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Typography style={styles.title}>
              Feel free to contact with me
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
            <Typography variant={Raleway.Light} style={styles.modalText}>
              If you have suggestions or questions, or perhaps an idea for a
              feature that could be implemented in the app, please send me an
              email.
            </Typography>
            <ContactFormSubjects
              data={CONTACT_FORM_DROPDOWN_ITEMS}
              selectedSubject={selectedSubject}
              onSubjectPress={setSelectedSubject}
            />
            <Pressable
              style={[styles.button, styles.sendEmailButton]}
              onPress={() => onWriteEmailButtonPress(selectedSubject)}
            >
              <Typography variant={Raleway.Bold} style={styles.textStyle}>
                Send Email
              </Typography>
            </Pressable>
            <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onCloseModal()}
            >
              <Typography variant={Raleway.Bold} style={styles.textStyle}>
                Hide
              </Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContactForm;
