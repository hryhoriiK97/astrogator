import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import NasaVideoItem from './NasaVideoItem';
import {nasaVideoItemPropsMock} from './NasaVideoItem.mocks';

storiesOf('NasaVideoItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <NasaVideoItem {...nasaVideoItemPropsMock} />);
