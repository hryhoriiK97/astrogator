import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export enum InputTypeError {
  Number = 'number',
  String = 'string',
  MaxValue = 'maxValue',
}

export type InputErrorTexts = {
  [key in InputTypeError]: string;
};

export enum InputTypeCheck {
  String = 'String',
  Number = 'Number',
  AllCharacters = 'AllCharacters',
}

export type SafeTextInputProps = {
  inputTypeCheckVariant: InputTypeCheck;
  isError: boolean;
  setIsError: (value: boolean) => void;
  errorTexts: InputErrorTexts;
  maxValue?: number;
  inputWrapperStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
};
