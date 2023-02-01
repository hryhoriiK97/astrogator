import {Divider, DividerVariant, Typography} from '@astrogator/common';
import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {DatePickerIcon} from '../../../assets/svgs/DatePickerIcon';
import {Star} from '../../../assets/svgs/Star';
import {styles} from './HomeHeader.styled';

const HomeHeader: FC = () => {
  return (
    <View style={styles.container}>
      <Typography style={styles.title}>Space Viewer</Typography>
      <Divider variant={DividerVariant.Divider_8_Vertical} />
      <Typography style={styles.subtitle}>
        Explore space managing updates directly from NASA
      </Typography>
      <Divider variant={DividerVariant.Divider_20_Vertical} />
      <View style={styles.homeHeaderActionsWrapper}>
        <View style={styles.latestUpdatesTitleWrapper}>
          <Star />
          <Typography style={styles.latestUpdatesTitle}>
            Latest Updates
          </Typography>
        </View>
        <View style={styles.datePickerWrapper}>
          <Typography style={styles.datePickerTitle}>Date Picker</Typography>
          <Divider variant={DividerVariant.Divider_5_Horizontal} />
          <Pressable style={styles.datePickerButton}>
            <DatePickerIcon />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
