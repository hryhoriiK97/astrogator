import React, { FC, useState } from "react";
import { Platform, Pressable, View } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { MobilePlatform } from "../../enums/MobilePlatform";
import { DatePickerIcon } from "../../../assets/svgs/DatePickerIcon";
import { Star } from "../../../assets/svgs/Star";
import { HomeHeaderProps } from "./HomeHeader.props";
import { Typography } from "../Typography";
import { Spacer, SpacerVariant } from "../Spacer";
import { styles } from "./HomeHeader.styled";

const HomeHeader: FC<HomeHeaderProps> = ({ onDatePicking }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  return (
    <>
      <View style={styles.container}>
        <Typography style={styles.title}>Astrogator</Typography>
        <Spacer variant={SpacerVariant.Spacer_5_Vertical} />
        <Typography style={styles.subtitle}>
          Explore space managing updates directly from NASA
        </Typography>
        <Spacer variant={SpacerVariant.Spacer_15_Vertical} />
        <View style={styles.homeHeaderActionsWrapper}>
          <View style={styles.latestUpdatesTitleWrapper}>
            <Star />
            <Typography style={styles.latestUpdatesTitle}>
              Latest Updates
            </Typography>
          </View>
          {Platform.OS === MobilePlatform.IOS ? (
            <DateTimePicker
              mode={"date"}
              display="default"
              dateFormat="longdate"
              themeVariant="dark"
              minimumDate={new Date("1995-06-16")}
              value={selectedDate || new Date()}
              maximumDate={new Date()}
              onChange={(event, date) => {
                setSelectedDate(date);
                if (event.type === "dismissed") {
                  onDatePicking(selectedDate || new Date()).then(() => {
                    setSelectedDate(undefined);
                  });
                }
              }}
            />
          ) : (
            <Pressable
              style={styles.datePickerWrapper}
              onPress={() =>
                DateTimePickerAndroid.open({
                  value: new Date(),
                })
              }
            >
              <Typography style={styles.datePickerTitle}>
                Date Picker
              </Typography>
              <Spacer variant={SpacerVariant.Spacer_5_Horizontal} />
              <View style={styles.datePickerButton}>
                <DatePickerIcon />
              </View>
            </Pressable>
          )}
        </View>
      </View>
      {Platform.OS === MobilePlatform.Android && (
        <DateTimePicker
          mode={"date"}
          display="calendar"
          minimumDate={new Date("1995-06-16")}
          value={new Date()}
          maximumDate={new Date()}
          onChange={(event, date) => {
            setSelectedDate(date);
            if (event.type === "dismissed") {
              onDatePicking(selectedDate || new Date()).then(() => {
                setSelectedDate(undefined);
              });
            }
          }}
        />
      )}
    </>
  );
};

export default HomeHeader;
