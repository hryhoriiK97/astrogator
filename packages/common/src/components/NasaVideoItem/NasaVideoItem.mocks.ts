import {NasaVideoItemProps} from './NasaVideoItem.props';

export const nasaVideoItemPropsMock: NasaVideoItemProps = {
  imageSource: {
    uri: 'https://images-assets.nasa.gov/video/SpaceX_CRS-23_Crew_Message/SpaceX_CRS-23_Crew_Message~thumb.jpg',
  },
  defaultSource: require('../../../assets/imgs/space-shuttle.webp'),
  title: 'International Space Station Crew Previews SpaceX CRS-23 Science',
  onPress: () => console.log('Press'),
  onLongPress: () => console.log('Long Press'),
};
