import React, {FC, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeImageProps} from './SafeImage.props';
import {styles} from './SafeImage.styled';

const SafeImage: FC<SafeImageProps> = ({
  source,
  defaultSource,
  imageStyle,
  imageWrapperStyle,
  children,
}) => {
  const [indicatorLoadingValue, setIndicatorLoadingValue] = useState(0);
  return (
    <View style={[styles.imageWrapper, imageWrapperStyle]}>
      <FastImage
        style={[styles.image, imageStyle]}
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
      {indicatorLoadingValue < 100 && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator />
        </View>
      )}
      {children}
    </View>
  );
};

export default SafeImage;
