import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AstrogatorColor.Black,
    },
    contentContainerStyle: {
      paddingBottom: 40 * bp,
    },
    imageWrapper: {
      position: 'relative',
    },
    imageInfoWrapper: {
      marginBottom: 10 * bp,
    },
    contentWrapper: {
      paddingVertical: 10 * bp,
      paddingHorizontal: 16 * bp,
    },
    title: {
      fontSize: 25 * bp,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 4,
      marginBottom: 5 * bp,
    },
    explanation: {
      display: 'flex',
      alignItems: 'center',
    },
    readMoreButton: {
      alignSelf: 'center',
      paddingLeft: 5 * bp,
    },
    pickButton: {
      width: '100%',
      marginTop: 15 * bp,
      alignItems: 'center',
      borderRadius: 10 * bp,
      backgroundColor: AstrogatorColor.VenetianNights,
      paddingVertical: 10 * bp,
      paddingHorizontal: 15 * bp,
    },
    pickTitle: {
      color: '#ffffff',
    },
  });
