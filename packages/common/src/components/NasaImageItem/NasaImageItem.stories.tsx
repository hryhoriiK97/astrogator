import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import NasaImageItem from './NasaImageItem';
import {nasaImageItemPropsMock} from './NasaImageItem.mocks';

storiesOf('NasaImageItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <NasaImageItem {...nasaImageItemPropsMock} />);
