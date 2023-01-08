import {storiesOf} from '@storybook/react-native';
import React from 'react';
import LoadingScreen from './LoadingScreen';

storiesOf('LoadingScreen', module)
  .addDecorator(getStory => getStory())
  .add('Default', () => <LoadingScreen />);
