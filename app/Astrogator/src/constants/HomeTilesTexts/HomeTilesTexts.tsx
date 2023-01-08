export enum HomeTileName {
  Apod = 'Apod',
  MarsRoverPhotos = 'MarsRoverPhotos',
}

export interface TileDescription {
  title: string;
  description: string;
}

type THomeTilesTexts = {
  [key in HomeTileName]: TileDescription;
};

export const HomeTilesTexts: THomeTilesTexts = {
  [HomeTileName.Apod]: {
    title: 'Astronomy Picture of the Day',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla tristique gravida. Praesent volutpat, ante non mollis auctor, ex nunc.',
  },
  [HomeTileName.MarsRoverPhotos]: {
    title: 'Mars Rover Photos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla tristique gravida. Praesent volutpat, ante non mollis auctor, ex nunc.',
  },
};
