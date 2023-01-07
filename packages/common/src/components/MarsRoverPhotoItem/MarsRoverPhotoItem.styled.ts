import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10 * bp,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 7 * bp,
  },
  image: {
    borderTopRightRadius: 7 * bp,
    borderTopLeftRadius: 7 * bp,
  },
  imageInformationWrapper: {
    paddingTop: 10 * bp,
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
