import {getRelativeUnits, SpaceMono} from '@astrogator/common';
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
    wrapper: {
      backgroundColor: AstrogatorColor.Black,
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
      color: AstrogatorColor.Black,
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
      color: AstrogatorColor.Black,
      marginBottom: 5 * bp,
    },
    footer: {
      height: 50 * bp,
    },
    modalContainer: {
      alignItems: 'center',
      padding: 10 * bp,
    },
    pickerTitle: {
      fontSize: 20 * bp,
      marginBottom: 20 * bp,
    },
    solInput: {
      width: 100 * bp,
      height: 50 * bp,
      padding: 5 * bp,
      fontSize: 17 * bp,
      fontFamily: SpaceMono.Bold,
      textAlign: 'center',
      borderRadius: 10 * bp,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: AstrogatorColor.White,
    },
  });
