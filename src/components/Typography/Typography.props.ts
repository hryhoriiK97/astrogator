import {ReactNode} from 'react';
import {TextProps, TextStyle} from 'react-native';

export enum Raleway {
  Regular = 'Raleway-Regular',
  Bold = 'Raleway-Bold',
  Medium = 'Raleway-Medium',
  Light = 'Raleway-Light',
}

export type TypographyProps = Partial<TextProps> &
  Partial<TextStyle> & {
    children: ReactNode;
    variant?: Raleway;
  };
