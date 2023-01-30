import {SafeInputErrorTexts, SafeInputTypeError} from '@astrogator/common';

export const inputErrorTexts: SafeInputErrorTexts = {
  [SafeInputTypeError.Number]: 'Please, type only numbers',
  [SafeInputTypeError.String]: 'Please, type only strings',
  [SafeInputTypeError.MaxValue]: 'Your number greater than maximum sol',
  [SafeInputTypeError.MinValue]: 'You number should be greater than 1',
};
