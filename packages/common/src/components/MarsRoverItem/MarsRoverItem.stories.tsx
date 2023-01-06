import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import MarsRoverItem from './MarsRoverItem';
import {marsRoverItemPropsMock} from './MarsRoverItem.mocks';

storiesOf('MarsRoverItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <MarsRoverItem {...marsRoverItemPropsMock} />);
