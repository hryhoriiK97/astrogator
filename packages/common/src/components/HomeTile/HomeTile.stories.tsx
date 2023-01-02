import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import HomeTile from './HomeTile';
import {homeTilePropsMock} from './HomeTile.mocks';

storiesOf('HomeTile', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <HomeTile {...homeTilePropsMock} />);
