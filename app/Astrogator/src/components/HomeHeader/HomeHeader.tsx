import {Divider, DividerVariant, Typography} from '@astrogator/common';
import React, {FC, useState} from 'react';
import {Pressable, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {DatePickerIcon} from '../../../assets/svgs/DatePickerIcon';
import {Star} from '../../../assets/svgs/Star';
import {HomeHeaderProps} from './HomeHeader.props';
import {styles} from './HomeHeader.styled';

const HomeHeader: FC<HomeHeaderProps> = ({onDatePicking}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <>
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
          <Pressable
            style={styles.datePickerWrapper}
            onPress={() => setShowDatePicker(true)}>
            <Typography style={styles.datePickerTitle}>Date Picker</Typography>
            <Divider variant={DividerVariant.Divider_5_Horizontal} />
            <View style={styles.datePickerButton}>
              <DatePickerIcon />
            </View>
          </Pressable>
        </View>
      </View>
      {/*@ts-ignore*/}
      <DatePicker
        modal
        mode={'date'}
        androidVariant={'iosClone'}
        minimumDate={new Date('1995-06-16')}
        open={showDatePicker}
        date={new Date()}
        maximumDate={new Date()}
        onConfirm={async (date: Date) => {
          setShowDatePicker(false);
          await onDatePicking(date);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </>
  );
};

export default HomeHeader;
