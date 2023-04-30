import React, { FC, useState } from "react";
import { TextInput, View } from "react-native";
import { Raleway, Typography } from "../Typography";
import { SafeTextInputProps } from "./SafeTextInput.props";
import { styles } from "./SafeTextInput.styled";
import { handleOnChangeText } from "./SafeTextInput.utils";

const SafeTextInput: FC<SafeTextInputProps> = ({
  inputTypeCheckVariant,
  setTextValue,
  isError,
  setIsError,
  maxValue,
  minValue,
  errorTexts,
  inputWrapperStyles,
  inputStyles,
}) => {
  const [errorText, setErrorText] = useState<string | null>(null);
  return (
    <View style={[styles.container, inputWrapperStyles]}>
      <Typography variant={Raleway.Bold} style={styles.errorText}>
        {isError ? errorText : ""}
      </Typography>
      <TextInput
        style={[styles.input, inputStyles]}
        onChangeText={(text) => {
          handleOnChangeText({
            text,
            inputTypeCheckVariant,
            setIsError,
            setErrorText,
            errorTexts,
            maxValue,
            minValue,
          });
          setTextValue(text);
        }}
      />
    </View>
  );
};

export default SafeTextInput;
