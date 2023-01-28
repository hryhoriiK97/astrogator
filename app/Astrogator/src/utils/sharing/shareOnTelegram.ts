import {useCallback} from 'react';
import Share, {Social} from 'react-native-share';
import {captureScreen} from 'react-native-view-shot';

export const shareOnTelegram = useCallback(() => {
  captureScreen({
    format: 'jpg',
    quality: 1,
  }).then(
    async uri => {
      await Share.shareSingle({
        filename: uri,
        url: uri,
        social: Social.Telegram,
      });
    },
    error => console.error('Oops, snapshot failed', error),
  );
}, []);
