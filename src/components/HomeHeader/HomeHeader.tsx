import React, { FC, useState } from "react";
import { Platform, Pressable, View } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { MobilePlatform } from "../../enums/MobilePlatform";
import { DatePickerIcon } from "../../../assets/svgs/DatePickerIcon";
import { Star } from "../../../assets/svgs/Star";
import { InfoModal } from "../Modals";
import { HomeHeaderProps } from "./HomeHeader.props";
import { Typography } from "../Typography";
import { Spacer, SpacerVariant } from "../Spacer";
import { styles } from "./HomeHeader.styled";

const HomeHeader: FC<HomeHeaderProps> = ({ onDatePicking }) => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  return (
    <>
      <InfoModal
        isVisible={isInfoModalVisible}
        onCloseModal={() => setIsInfoModalVisible(false)}
        title={"APOD"}
        description={
          "Astronomy Picture of the Day or APOD is a popular online platform initiated by NASA and Michigan Technological University. Launched in 1995, APOD presents a unique, high-quality image or photograph of our universe each day, paired with a brief explanation provided by professional astronomers. The images presented span a wide range of astronomical phenomena, including planets, galaxies, nebulae, star clusters, and notable events like eclipses and meteor showers. APOD is a widely appreciated source of knowledge and inspiration, attracting space enthusiasts, educators, and students alike with its engaging blend of visual splendor and scientific insight."
        }
      />
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
            <View style={styles.titleWrapper}>
              <Typography
                style={[styles.latestUpdatesTitle, styles.apodsTitle]}
                onPress={() => setIsInfoModalVisible(true)}
              >
                APODs
              </Typography>
              <Typography style={styles.latestUpdatesTitle}>
                Latest Updates
              </Typography>
            </View>
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
