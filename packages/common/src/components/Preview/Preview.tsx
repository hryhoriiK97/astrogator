import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FormArrow} from '../../../assets/svgs/Arrow';
import {Typography} from '../Typography';
import {styles} from './Preview.styled';

const Preview: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
          easing: Easing.linear,
          isInteraction: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.linear,
          isInteraction: false,
        }),
      ]),
    ).start();
  }, [fadeAnim]);
  const [showPreview, setShowPreview] = useState(true);

  if (!showPreview) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={() => setShowPreview(false)}>
      <View style={[StyleSheet.absoluteFillObject, styles.previewContainer]}>
        <Animated.View
          style={[
            styles.previewContent,
            {opacity: fadeAnim},
            // {transform: [{translateX: fadeAnim}]},
          ]}>
          <Typography style={styles.previewText}>Swap</Typography>
          <Animated.View style={[styles.iconWrapper]}>
            <FormArrow />
          </Animated.View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Preview;
