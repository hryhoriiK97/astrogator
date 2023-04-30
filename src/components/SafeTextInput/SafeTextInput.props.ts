import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export enum SafeInputTypeError {
  Number = 'number',
  String = 'string',
  MaxValue = 'maxValue',
  MinValue = 'minValue',
}

export type SafeInputErrorTexts = {
  [key in SafeInputTypeError]: string;
};

export enum SafeInputTypeCheck {
  String = 'String',
  Number = 'Number',
  AllCharacters = 'AllCharacters',
}

export type SafeTextInputProps = {
  inputTypeCheckVariant: SafeInputTypeCheck;
  setTextValue: (value: string) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  errorTexts: SafeInputErrorTexts;
  maxValue?: number;
  minValue?: number;
  inputWrapperStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
};
