import {
  SafeInputErrorTexts,
  SafeInputTypeCheck,
  SafeInputTypeError,
} from './SafeTextInput.props';

const LETTER_REGEX = /[A-Za-z]/;
const NUMBERS_REGEX = /^[0-9]+$/;

interface HandleOnChangeText {
  text: string;
  inputTypeCheckVariant: SafeInputTypeCheck;
  setIsError: (value: boolean) => void;
  setErrorText: (value: string) => void;
  errorTexts: SafeInputErrorTexts;
  maxValue?: number;
  minValue?: number;
}

export const handleOnChangeText = ({
  text,
  inputTypeCheckVariant,
  setIsError,
  setErrorText,
  errorTexts,
  maxValue,
  minValue,
}: HandleOnChangeText) => {
  if (text === '') {
    setIsError(false);
    return;
  }
  if (
    (inputTypeCheckVariant === SafeInputTypeCheck.Number &&
      text.match(LETTER_REGEX)) ||
    (maxValue && Number(text) > maxValue) ||
    (minValue && Number(text) < minValue)
  ) {
    setIsError(true);
    setErrorText(
      errorTexts[
        Number(text) > maxValue!
          ? SafeInputTypeError.MaxValue
          : text !== '' && Number(text) < minValue!
          ? SafeInputTypeError.MinValue
          : SafeInputTypeError.Number
      ],
    );
  } else if (
    inputTypeCheckVariant === SafeInputTypeCheck.String &&
    text.match(NUMBERS_REGEX)
  ) {
    setIsError(true);
    setErrorText(errorTexts[SafeInputTypeError.String]);
  } else {
    setIsError(false);
  }
};
