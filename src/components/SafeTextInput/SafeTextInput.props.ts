import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export enum SafeInputTypeError {
  Number = "number",
  String = "string",
  MaxValue = "maxValue",
  MinValue = "minValue",
}

export type SafeInputErrorTexts = {
  [key in SafeInputTypeError]: string;
};

export enum SafeInputTypeCheck {
  String = "String",
  Number = "Number",
  AllCharacters = "AllCharacters",
}

export type SafeTextInputProps = {
  currentValue: TextInputProps["value"];
  inputTypeCheckVariant: SafeInputTypeCheck;
  setTextValue: (value: string) => void;
  errorTexts: SafeInputErrorTexts;
  maxValue?: number;
  minValue?: number;
  inputWrapperStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  placeholder?: string;
};
