import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import NasaAssetItem from './NasaAssetItem';
import {nasaAssetItemPropsMock} from './NasaAssetItem.mocks';

storiesOf('NasaAssetItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <NasaAssetItem {...nasaAssetItemPropsMock} />);
