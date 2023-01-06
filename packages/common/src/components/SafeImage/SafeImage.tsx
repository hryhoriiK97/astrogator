import React, {FC, useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {SafeImageProps} from './SafeImage.props';
import {styles} from './SafeImage.styled';

const SafeImage: FC<SafeImageProps> = ({
  source,
  defaultSource,
  linearGradientColors,
  imageStyle,
  imageWrapperStyle,
}) => {
  const [indicatorLoadingValue, setIndicatorLoadingValue] = useState(0);
  console.log(source);
  return (
    <View style={[styles().imageWrapper, imageWrapperStyle]}>
      <FastImage
        style={[styles().image, imageStyle]}
        source={source}
        defaultSource={defaultSource}
        resizeMode={FastImage.resizeMode.cover}
        onLoad={() => setIndicatorLoadingValue(100)}
        onProgress={e => {
          const loadedValue =
            (e.nativeEvent.loaded / e.nativeEvent.total) * 100;
          if (loadedValue > 0) {
            setIndicatorLoadingValue(loadedValue);
          }
        }}
      />
      <View style={styles().imageIndicatorWrapper}>
        <LinearGradient
          colors={linearGradientColors}
          style={styles(indicatorLoadingValue).indicator}
        />
      </View>
    </View>
  );
};

export default SafeImage;
