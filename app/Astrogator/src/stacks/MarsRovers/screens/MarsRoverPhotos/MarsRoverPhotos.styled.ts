import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

export enum Status {
  Active = 'active',
  Complete = 'complete',
}

const {bp} = getRelativeUnits();

export const styles = (status?: Status) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    renderItemWrapper: {
      paddingHorizontal: 16 * bp,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
    },
    imageWrapper: {
      position: 'relative',
    },
    roverImage: {
      width: '100%',
      height: 300 * bp,
    },
    roverInformationWrapper: {
      width: '90%',
      alignSelf: 'center',
      borderRadius: 5 * bp,
      marginTop: 30 * bp,
      backgroundColor: AstrogatorColor.White,
      padding: 20 * bp,
      marginVertical: 20 * bp,
    },
    roverName: {
      marginBottom: 10 * bp,
      fontSize: 24 * bp,
      color: AstrogatorColor.MiddleRedPurple,
    },
    statusWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    status: {
      color: status === Status.Active ? 'green' : 'red',
      marginLeft: 5 * bp,
      marginBottom: 5 * bp,
      textTransform: 'capitalize',
    },
    roverDetailText: {
      color: AstrogatorColor.MiddleRedPurple,
      marginBottom: 5 * bp,
    },
  });
