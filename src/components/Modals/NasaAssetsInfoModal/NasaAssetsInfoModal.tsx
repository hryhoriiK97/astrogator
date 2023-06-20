import React, { FC } from "react";
import { View, Modal, Pressable } from "react-native";
import { Spacer, SpacerVariant } from "../../Spacer";
import { Typography, Raleway } from "../../Typography";
import { NasaAssetsInfoModalProps } from "./NasaAssetsInfoModal.props";
import { styles } from "./NasaAssetsInfoModal.styled";

const NasaAssetsInfoModal: FC<NasaAssetsInfoModalProps> = ({
  isVisible,
  onCloseModal,
}) => {
  return (
    <View style={styles.outerWrapper}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isVisible}
        onDismiss={() => onCloseModal()}
        onRequestClose={() => onCloseModal()}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
            <Typography variant={Raleway.Light} style={styles.modalText}>
              It looks like your query isn't working... Try another one
            </Typography>

            <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onCloseModal()}
            >
              <Typography variant={Raleway.Bold} style={styles.buttonTitle}>
                Okay
              </Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NasaAssetsInfoModal;
