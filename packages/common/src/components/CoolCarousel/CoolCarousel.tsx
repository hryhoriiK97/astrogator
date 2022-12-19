import React, {useRef} from 'react';
import {Animated, Image, ImageProps, View} from 'react-native';
import {Preview} from '../Preview';
import {CoolCarouselProps} from './CoolCarousel.props';
import {styles} from './CoolCarousel.styled';
import {useCarouselDimension} from './CoolCarousel.utils';
import {CoolCarouselBackground} from './CoolCarouselBackground';

const CoolCarousel: React.FC<CoolCarouselProps> = ({
  imagesSources,
  defaultSource,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {screenWidth, imageWidth, imageHeight} = useCarouselDimension();

  const renderItem = ({item}: {item: ImageProps['source']}) => {
    return (
      <View style={[styles.imageWrapper, {width: screenWidth}]}>
        <Image
          source={item}
          defaultSource={defaultSource}
          style={[styles.image, {width: imageWidth, height: imageHeight}]}
          resizeMode={'cover'}
        />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Preview />
      <CoolCarouselBackground
        imagesSources={imagesSources}
        carouselScrollX={scrollX}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
        horizontal
        pagingEnabled
        data={imagesSources}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CoolCarousel;
