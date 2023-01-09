import {
  SafeInputErrorTexts,
  SafeInputTypeCheck,
  SafeInputTypeError,
  SafeTextInputProps,
} from './SafeTextInput.props';

const errorTexts: SafeInputErrorTexts = {
  [SafeInputTypeError.Number]: 'Please, type only numbers',
  [SafeInputTypeError.String]: 'Please, type only strings',
  [SafeInputTypeError.MaxValue]: 'Your number greater than maximum sol ',
};

export const safeTextInputPropsMock: SafeTextInputProps = {
  inputTypeCheckVariant: SafeInputTypeCheck.Number,
  maxValue: 3702,
  errorTexts: errorTexts,
  isError: false,
  setIsError: value => console.log(value),
};
