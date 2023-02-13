import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import MarsRoverWidget from './MarsRoverWidget';
import {marsRoverWidgetPropsMock} from './MarsRoverWidget.mocks';

storiesOf('MarsRoverWidget', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <MarsRoverWidget {...marsRoverWidgetPropsMock} />);
