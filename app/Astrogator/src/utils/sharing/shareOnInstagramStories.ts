import Share, {Social} from 'react-native-share';
import {captureScreen} from 'react-native-view-shot';
import {AstrogatorColor} from '../../theming/theme';

export const shareOnInstagramStories = () => {
  captureScreen({
    format: 'jpg',
    quality: 1,
  }).then(
    async uri => {
      await Share.shareSingle({
        stickerImage: uri,
        social: Social.InstagramStories,
        backgroundTopColor: AstrogatorColor.VenetianNights,
        backgroundBottomColor: AstrogatorColor.Black,
        appId: 'com.astrogator',
      });
    },
    error => console.error('Oops, snapshot failed', error),
  );
};
