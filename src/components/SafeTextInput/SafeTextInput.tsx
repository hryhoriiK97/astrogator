import React, { FC, useState } from "react";
import { TextInput, View } from "react-native";
import { Raleway, Typography } from "../Typography";
import { SafeTextInputProps } from "./SafeTextInput.props";
import { handleOnChangeText } from "./SafeTextInput.utils";
import { styles } from "./SafeTextInput.styled";

const SafeTextInput: FC<SafeTextInputProps> = ({
  currentValue,
  inputTypeCheckVariant,
  setTextValue,
  maxValue,
  minValue,
  errorTexts,
  inputWrapperStyles,
  inputStyles,
  placeholder,
}) => {
  const [isError, setIsError] = useState<boolean>();
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleOnTypingText = (text: string) => {
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
  };
  return (
    <View style={[styles.container, inputWrapperStyles]}>
      <Typography variant={Raleway.Bold} style={styles.errorText}>
        {isError ? errorText : ""}
      </Typography>
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder={placeholder}
        value={currentValue}
        onChangeText={handleOnTypingText}
        onEndEditing={(event) => {
          handleOnTypingText(event.nativeEvent.text);
        }}
      />
    </View>
  );
};

export default SafeTextInput;
