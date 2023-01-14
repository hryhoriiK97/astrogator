import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    padding: 15 * bp,
  },
  title: {
    fontSize: 20 * bp,
    color: AstrogatorColor.White,
  },
  imageInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10 * bp,
  },
  imageInfoText: {
    fontSize: 10 * bp,
    color: AstrogatorColor.White,
  },
  description: {
    fontSize: 14 * bp,
    color: AstrogatorColor.White,
  },
  keywordsWrapper: {
    width: '100%',
    marginTop: 20 * bp,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  keywordItem: {
    padding: 5 * bp,
    borderRadius: 3 * bp,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  keywordItemText: {
    fontSize: 12 * bp,
    color: AstrogatorColor.White,
  },
});
