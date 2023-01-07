import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 7 * bp,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  image: {
    width: '100%',
    height: 250 * bp,
    borderTopRightRadius: 7 * bp,
    borderTopLeftRadius: 7 * bp,
  },
  imageInformationWrapper: {
    paddingVertical: 10 * bp,
    paddingHorizontal: 16 * bp,
    borderBottomRightRadius: 7 * bp,
    borderBottomLeftRadius: 7 * bp,
  },
  cameraName: {
    fontSize: 15 * bp,
  },
  dateText: {
    fontSize: 11 * bp,
  },
});
