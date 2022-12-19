import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#000000',
    flex: 1,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 16,
  },
});
