import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import {MarsRoverPhotoItem} from './index';
import {marsRoverPhotoItemPropsMock} from './MarsRoverPhotoItem.mocks';

storiesOf('MarsRoverPhotoItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <MarsRoverPhotoItem {...marsRoverPhotoItemPropsMock} />
  ));
