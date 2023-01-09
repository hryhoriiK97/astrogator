import {
  InputErrorTexts,
  InputTypeCheck,
  InputTypeError,
  SafeTextInputProps,
} from './SafeTextInput.props';

const errorTexts: InputErrorTexts = {
  [InputTypeError.Number]: 'Please, type only numbers',
  [InputTypeError.String]: 'Please, type only strings',
  [InputTypeError.MaxValue]: 'Your number greater than maximum sol ',
};

export const safeTextInputPropsMock: SafeTextInputProps = {
  inputTypeCheckVariant: InputTypeCheck.Number,
  maxValue: 3702,
  errorTexts: errorTexts,
  isError: false,
  setIsError: value => console.log(value),
};
