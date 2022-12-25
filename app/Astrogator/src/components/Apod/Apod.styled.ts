import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16 * bp,
    borderRadius: 12 * bp,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    height: 200,
  },
  imageBackground: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 16 * bp,
    backgroundColor: '#ffffff',
    borderRadius: 12 * bp,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.78,
    shadowRadius: 11.95,
    elevation: 18,
  },
  image: {
    borderRadius: 12 * bp,
  },
  title: {
    color: '#ffffff',
    fontSize: 19 * bp,
  },
});
