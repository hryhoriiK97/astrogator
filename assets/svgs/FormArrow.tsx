import Svg, {Polygon} from 'react-native-svg';

export type SvgType = {
  fillColor?: string;
  width?: number;
  height?: number;
};

export const FormArrow = ({
  fillColor = '#ffffff',
  width = 9,
  height = 16,
}: SvgType) => (
  <Svg width={width} height={height} viewBox="0 0 8 14">
    <Polygon
      x="-3.00"
      y="1.00"
      fill={fillColor}
      points="4.33333333 13.4287109 11 6.92871094 4.33333333 0.428710938 3 1.72871094 8.33333333 6.92871094 3 12.1287109"
    />
  </Svg>
);
