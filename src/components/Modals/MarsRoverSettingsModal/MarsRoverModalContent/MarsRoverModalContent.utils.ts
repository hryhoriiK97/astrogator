import {
  SafeInputErrorTexts,
  SafeInputTypeError,
} from "../../../SafeTextInput";

export const inputErrorTexts: SafeInputErrorTexts = {
  [SafeInputTypeError.Number]: "Please, type only numbers",
  [SafeInputTypeError.String]: "Please, type only text",
  [SafeInputTypeError.MaxValue]: "Your number greater than maximum sol",
  [SafeInputTypeError.MinValue]: "You number should be greater than 1",
};
