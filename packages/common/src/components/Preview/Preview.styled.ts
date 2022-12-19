import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,
    zIndex: 100,
  },
  previewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
  },
  iconWrapper: {
    marginLeft: 15,
  },
});
