import React, { FC } from "react";
import { Modal, Pressable, View } from "react-native";
import { InfoModalProps } from "./InfoModal.props";
import { Raleway, Typography } from "../../Typography";
import { Spacer, SpacerVariant } from "../../Spacer";
import { styles } from "./InfoModal.styled";

const InfoModal: FC<InfoModalProps> = ({
  isVisible,
  onCloseModal,
  title,
  description,
}) => {
  return (
    <View style={styles.outerWrapper}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => onCloseModal()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Typography style={styles.title}>{title}</Typography>
            <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
            <Typography variant={Raleway.Light} style={styles.modalText}>
              {description}
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
            <Pressable
              style={[styles.button, styles.hideButton]}
              onPress={onCloseModal}
            >
              <Typography variant={Raleway.Bold} style={styles.buttonTitle}>
                Hide
              </Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InfoModal;
