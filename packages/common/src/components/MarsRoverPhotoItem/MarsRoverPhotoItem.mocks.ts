import {MarsRoverPhotoItemProps} from './MarsRoverPhotoItem.props';

export const marsRoverPhotoItemPropsMock: MarsRoverPhotoItemProps = {
  imageSource: {
    uri: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03703/opgs/edr/fcam/FLB_726228771EDR_F0990740FHAZ00302M_.JPG',
  },
  defaultSource: require('../../../assets/imgs/space-shuttle.webp'),
  cameraFullName: 'Front Hazard Avoidance Camera',
  cameraAbbreviation: 'FHAZ',
  earthData: '2023-01-05',
  sol: 3703,
};
