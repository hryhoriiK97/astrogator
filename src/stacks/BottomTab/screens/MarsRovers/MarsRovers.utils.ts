import { ImageProps } from "react-native";

export enum MarsRover {
  Curiosity = "curiosity",
  Spirit = "spirit",
  Opportunity = "opportunity",
  Perseverance = "perseverance",
}

type MarsRoverImages = {
  [key in MarsRover]: ImageProps["source"];
};

export const marsRoverImages: MarsRoverImages = {
  [MarsRover.Curiosity]: require("../../../../../assets/images/marsRovers/curiosity.webp"),
  [MarsRover.Spirit]: require("../../../../../assets/images/marsRovers/spirit.webp"),
  [MarsRover.Opportunity]: require("../../../../../assets/images/marsRovers/opportunity.webp"),
  [MarsRover.Perseverance]: require("../../../../../assets/images/marsRovers/perserverance.webp"),
};
