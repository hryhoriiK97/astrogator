import {Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {FacebookIcon} from '../../../../assets/svgs/socialMediasIcons/FacebookIcon';
import {InstagramIcon} from '../../../../assets/svgs/socialMediasIcons/InstagramIcon';
import {TelegramIcon} from '../../../../assets/svgs/socialMediasIcons/TelegramIcon';
import {ShareMenuTabProps} from './ShareMenuTab.props';
import {styles} from './ShareMenuTab.styled';

const ShareMenuTab: FC<ShareMenuTabProps> = ({
  onInstagramIconPress,
  onFacebookIconPress,
  onTelegramIconPress,
}) => {
  return (
    <View style={styles.container}>
      <Typography style={styles.title}>Share</Typography>
      <View style={styles.socialIconsWrapper}>
        <Pressable onPress={onInstagramIconPress}>
          <InstagramIcon />
        </Pressable>
        <Pressable onPress={onFacebookIconPress}>
          <FacebookIcon />
        </Pressable>
        <Pressable onPress={onTelegramIconPress}>
          <TelegramIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default ShareMenuTab;
