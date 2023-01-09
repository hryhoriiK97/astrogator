import React, {FC, useState} from 'react';
import {TextInput, View} from 'react-native';
import {SpaceMono, Typography} from '../Typography';
import {SafeTextInputProps} from './SafeTextInput.props';
import {styles} from './SafeTextInput.styled';
import {handleOnChangeText} from './SafeTextInput.utils';

const SafeTextInput: FC<SafeTextInputProps> = ({
  inputTypeCheckVariant,
  maxValue,
  isError,
  setIsError,
  errorTexts,
  inputWrapperStyles,
  inputStyles,
}) => {
  /* Use local useState only for storybook */
  // const [isError, setIsError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  return (
    <View style={[styles.container, inputWrapperStyles]}>
      <Typography variant={SpaceMono.Bold} style={styles.errorText}>
        {isError ? errorText : ''}
      </Typography>
      <TextInput
        style={[styles.input, inputStyles]}
        onChangeText={text => {
          handleOnChangeText({
            text,
            inputTypeCheckVariant,
            setIsError,
            setErrorText,
            errorTexts,
            maxValue,
          });
        }}
      />
    </View>
  );
};

export default SafeTextInput;
