import {
  InputErrorTexts,
  InputTypeCheck,
  InputTypeError,
} from './SafeTextInput.props';

const LETTER_REGEX = /[A-Za-z]/;
const NUMBERS_REGEX = /^[0-9]+$/;

interface HandleOnChangeText {
  text: string;
  inputTypeCheckVariant: InputTypeCheck;
  setIsError: (value: boolean) => void;
  setErrorText: (value: string) => void;
  errorTexts: InputErrorTexts;
  maxValue?: number;
}

export const handleOnChangeText = ({
  text,
  inputTypeCheckVariant,
  setIsError,
  setErrorText,
  errorTexts,
  maxValue,
}: HandleOnChangeText) => {
  if (
    (inputTypeCheckVariant === InputTypeCheck.Number &&
      text.match(LETTER_REGEX)) ||
    (maxValue && Number(text) > maxValue)
  ) {
    setIsError(true);
    setErrorText(
      errorTexts[
        Number(text) > maxValue!
          ? InputTypeError.MaxValue
          : InputTypeError.Number
      ],
    );
  } else if (
    inputTypeCheckVariant === InputTypeCheck.String &&
    text.match(NUMBERS_REGEX)
  ) {
    setIsError(true);
    setErrorText(errorTexts[InputTypeError.String]);
  } else {
    setIsError(false);
  }
};
