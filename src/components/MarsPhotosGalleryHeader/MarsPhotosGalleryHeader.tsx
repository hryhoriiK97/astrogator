import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { Chevron } from "../../../assets/svgs/Chevron";
import { styles } from "./MarsPhotosGalleryHeader.styled";
import { Raleway, Typography } from "../Typography";
import { Spacer, SpacerVariant } from "../Spacer";
import { DatePickerIcon } from "../../../assets/svgs/DatePickerIcon";
import { List } from "../../../assets/svgs/List";
import { MarsPhotosGalleryHeaderProps } from "./MarsPhotosGalleryHeader.props";

const MarsPhotosGalleryHeader: FC<MarsPhotosGalleryHeaderProps> = ({
  onGoBackButtonPress,
  onSettingsModalPress,
  onFullListPress,
  isFullListButtonDisabled,
  date,
  photosCount,
  roverName,
}) => {
  return (
    <View style={styles.header}>
      <Typography variant={Raleway.Bold} style={styles.title}>
        Gallery
      </Typography>
      <Spacer variant={SpacerVariant.Spacer_5_Vertical} />
      <Typography variant={Raleway.Regular} style={styles.subtitle}>
        {!isFullListButtonDisabled
          ? `${roverName ?? ""} - ${date ? date : "-"} - ${photosCount} photos`
          : ""}
      </Typography>
      <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
      <View style={styles.navigationBar}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={onGoBackButtonPress}
        >
          <Chevron rotate={180} />
        </Pressable>
        <View style={styles.datePickerWrapper}>
          <Pressable
            style={styles.datePickerContainer}
            onPress={onSettingsModalPress}
          >
            <Typography variant={Raleway.Medium} style={styles.datePickerText}>
              Date Picker
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_3_Horizontal} />
            <DatePickerIcon />
          </Pressable>
          <Spacer variant={SpacerVariant.Spacer_7_Horizontal} />
          {onFullListPress && (
            <Pressable
              style={styles.fullListButtonContainer}
              disabled={isFullListButtonDisabled}
              android_disableSound={true}
              onPress={onFullListPress}
            >
              <List />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default MarsPhotosGalleryHeader;
