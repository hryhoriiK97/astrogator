import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingBottom: 40 * bp,
    },
    imageWrapper: {
      position: 'relative',
    },
    backButton: {
      position: 'absolute',
      top: 20 * bp,
      left: 0,
      paddingHorizontal: 8 * bp,
      paddingTop: 29 * bp,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      zIndex: 3,
    },
    backButtonTitle: {
      fontSize: 17 * bp,
      lineHeight: 22 * bp,
      color: '#ffffff',
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
    pickButton: {
      width: '100%',
      marginTop: 15 * bp,
      alignItems: 'center',
      borderRadius: 10 * bp,
      backgroundColor: AstrogatorColor.BlueViolet,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: AstrogatorColor.DarkPurple,
      paddingVertical: 10 * bp,
      paddingHorizontal: 15 * bp,
    },
    pickTitle: {
      color: '#ffffff',
    },
  });
