import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CenterView from '../../../storybook/utils/CenterView';
import Divider from './Divider';
import {DividerVariant} from './Divider.utils';

const boxStyles = StyleSheet.create({
  box: {
    height: 50,
    width: 200,
    backgroundColor: 'red',
  },
});

storiesOf('Divider', module)
  .addDecorator(getStory => (
    <CenterView>
      <View style={boxStyles.box} />
      {getStory()}
      <View style={boxStyles.box} />
    </CenterView>
  ))
  .add('Divider_5_Vertical', () => (
    <Divider variant={DividerVariant.Divider_5_Vertical} />
  ))
  .add('Divider_10_Vertical', () => (
    <Divider variant={DividerVariant.Divider_10_Vertical} />
  ))
  .add('Divider_15_Vertical', () => (
    <Divider variant={DividerVariant.Divider_15_Vertical} />
  ));
