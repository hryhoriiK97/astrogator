import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';

export enum Status {
  Active = 'active',
  Complete = 'complete',
}

const {bp} = getRelativeUnits();

export const styles = (status?: Status) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
    },
    blurView: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
    },
    roverImage: {
      width: '100%',
      height: 200 * bp,
      borderRadius: 16 * bp,
      marginBottom: 20 * bp,
    },
    roverInformationWrapper: {
      position: 'relative',
      paddingHorizontal: 16 * bp,
      paddingVertical: 30 * bp,
      width: '100%',
      alignSelf: 'center',
      borderRadius: 5 * bp,
    },
    roverNameWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    roverName: {
      marginBottom: 10 * bp,
      fontSize: 24 * bp,
      color: AstrogatorColor.White,
    },
    filterButton: {
      alignItems: 'center',
      padding: 5 * bp,
      borderRadius: 5 * bp,
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
      color: AstrogatorColor.White,
      marginBottom: 5 * bp,
    },
  });
