import {Dimensions} from 'react-native';

/** getRelativeUnits util for properly scaling in different devices.
 *
 * @param {number} baseSize This will allow to set a size for current device.
 */

export function getRelativeUnits(baseSize = 375): {
  vw: number;
  vh: number;
  bp: number;
} {
  const dimensions = Dimensions.get('window');
  return {
    vw: dimensions.width / 100,
    vh: dimensions.height / 100,
    bp: dimensions.width / baseSize,
  };
}
