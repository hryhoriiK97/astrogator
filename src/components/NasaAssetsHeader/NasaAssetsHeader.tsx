import React, { FC } from "react";
import Animated from "react-native-reanimated";
import { styles } from "./NasaAssetsHeader.styled";

import { NasaAssetsHeaderProps } from "./NasaAssetsHeader.props";
import { SafeInputTypeCheck, SafeTextInput } from "../SafeTextInput";
import { inputErrorTexts } from "../Modals/MarsRoverSettingsModal/MarsRoverModalContent/MarsRoverModalContent.utils";
import { Typography } from "../Typography";
import { Pressable, View } from "react-native";

const NasaAssetsHeader: FC<NasaAssetsHeaderProps> = ({
  currentInputValue,
  onInputValueChange,
  onSearchButtonPress,
  headerAnimatedStyle,
}) => {
  return (
    <Animated.View style={[styles.container, headerAnimatedStyle]}>
      <Typography>Type your keyword</Typography>
      <SafeTextInput
        currentValue={currentInputValue}
        inputTypeCheckVariant={SafeInputTypeCheck.String}
        setTextValue={onInputValueChange}
        errorTexts={inputErrorTexts}
        placeholder="Type the keywords, separated by comma"
      />
      <View style={styles.buttonsWrapper}>
        <Pressable style={styles.button} onPress={onSearchButtonPress}>
          <Typography style={styles.buttonTitle}>Search</Typography>
        </Pressable>
        <Pressable
          onPress={() => onInputValueChange(undefined)}
          style={styles.button}
        >
          <Typography style={styles.buttonTitle}>Clear</Typography>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default NasaAssetsHeader;
