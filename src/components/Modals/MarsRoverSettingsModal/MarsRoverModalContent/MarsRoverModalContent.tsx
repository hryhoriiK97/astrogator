import { Raleway, Typography } from "../../../Typography";
import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { MarsRoverModalContentProps } from "./MarsRoverModalContent.props";
import { Spacer, SpacerVariant } from "../../../Spacer";
import { DropdownSelector } from "../../../DropdownSelector";
import { SafeInputTypeCheck, SafeTextInput } from "../../../SafeTextInput";
import { inputErrorTexts } from "./MarsRoverModalContent.utils";
import { styles } from "./MarsRoverModalContent.styled";

const MarsRoverModalContent: FC<MarsRoverModalContentProps> = ({
  rover,
  selectedMarsSol,
  selectedCamera,
  onCameraSelection,
  onMarsSolSelection,
  onExploreButtonPress,
}) => {
  const cameras = rover.cameras.map((camera) => {
    return { value: camera.name, label: camera.name };
  });

  return (
    <View style={styles.container}>
      <Typography
        variant={Raleway.Bold}
        style={styles.title}
        color={AstrogatorColor.White}
      >
        {rover.name}
      </Typography>
      <View style={styles.rowWrapper}>
        <Typography
          variant={Raleway.Medium}
          color={AstrogatorColor.White}
          style={styles.roverInfoText}
        >
          Status:
        </Typography>
        <Typography
          variant={Raleway.Medium}
          color={
            rover.status === "active"
              ? AstrogatorColor.Green
              : AstrogatorColor.Red
          }
          style={[styles.roverInfoText, styles.statusTitle]}
        >
          {rover.status}
        </Typography>
      </View>
      <Typography
        variant={Raleway.Medium}
        color={AstrogatorColor.White}
        style={styles.roverInfoText}
      >
        Launch Date: {rover.launch_date}
      </Typography>
      <Typography
        variant={Raleway.Medium}
        color={AstrogatorColor.White}
        style={styles.roverInfoText}
      >
        Landing Date: {rover.landing_date}
      </Typography>
      <Typography
        variant={Raleway.Medium}
        color={AstrogatorColor.White}
        style={styles.roverInfoText}
      >
        Total amount of photos: {rover.total_photos}
      </Typography>
      <Typography
        variant={Raleway.Medium}
        color={AstrogatorColor.White}
        style={styles.roverInfoText}
      >
        {`Last earth date / mars sol: ${rover.max_date} / ${rover.max_sol}`}
      </Typography>
      <SafeTextInput
        currentValue={selectedMarsSol!}
        inputTypeCheckVariant={SafeInputTypeCheck.Number}
        setTextValue={onMarsSolSelection}
        errorTexts={inputErrorTexts}
        placeholder={"Type mars sol"}
      />
      <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
      <DropdownSelector
        data={cameras}
        currentValue={selectedCamera!}
        placeholderText={"Select rover camera"}
        onItemSelection={onCameraSelection}
      />
      <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
      <Pressable onPress={onExploreButtonPress} style={styles.exploreButton}>
        <Typography style={styles.exploreTitle}>Explore</Typography>
      </Pressable>
    </View>
  );
};

export default MarsRoverModalContent;
