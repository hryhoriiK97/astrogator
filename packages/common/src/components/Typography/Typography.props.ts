import {ReactNode} from 'react';
import {TextProps, TextStyle} from 'react-native';

export enum SpaceMono {
  Regular = 'SpaceMono-Regular',
  Bold = 'SpaceMono-Bold',
}

export type TypographyProps = Partial<TextProps> &
  Partial<TextStyle> & {
    children: ReactNode;
    variant?: SpaceMono;
  };
