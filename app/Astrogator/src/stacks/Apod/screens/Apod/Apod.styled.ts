import {getRelativeUnits, MobilePlatform, Raleway} from '@astrogator/common';
import {Platform, StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
  apodHeader: {
    height: 89 * bp,
  },
  contentContainerStyle: {
    paddingVertical: 10 * bp,
    paddingHorizontal: 16 * bp,
  },
  image: {
    height: 219 * bp,
    borderRadius: 8 * bp,
  },
  imageWrapper: {
    position: 'relative',
  },
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subheaderText: {
    color: AstrogatorColor.Silver,
    fontSize: 14 * bp,
    fontFamily: Raleway.Light,
    lineHeight: 16 * bp,
  },
  imageInfoWrapper: {
    marginBottom: 10 * bp,
  },
  subheaderControlsWrapper: {
    minWidth: 65 * bp,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  youtubePlayerWhiteSpace: {
    height: 50 * bp,
  },
  title: {
    fontSize: 25 * bp,
    marginTop: Platform.OS === MobilePlatform.IOS ? 40 * bp : 30 * bp,
    marginBottom: 16 * bp,
    color: AstrogatorColor.White,
  },
  explanation: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
    lineHeight: 21 * bp,
    marginTop: Platform.OS === MobilePlatform.IOS ? 40 * bp : 20 * bp,
  },
  readMoreButton: {
    alignSelf: 'center',
    paddingLeft: 5 * bp,
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.VenetianNights,
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
