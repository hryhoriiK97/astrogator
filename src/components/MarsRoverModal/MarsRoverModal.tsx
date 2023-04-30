import { Raleway, Typography } from "../../components/Typography";
import React, { FC } from "react";
import { View } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { MarsRoverModalProps } from "./MarsRoverModal.props";
import { styles } from "./MarsRoverModal.styled";
import { Divider, DividerVariant } from "../Divider";
import { DropdownSelector } from "../DropdownSelector";

const MarsRoverModal: FC<MarsRoverModalProps> = ({ rover }) => {
  const cameras = rover.cameras.map((camera) => {
    return {value: camera.name, label: camera.name}
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
      <Divider variant={DividerVariant.Divider_15_Vertical} />
      <DropdownSelector data={cameras} labelText="Rover cameras" placeholderText="Select rover camera" />
    </View>
  );
};

export default MarsRoverModal;
