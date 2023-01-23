import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import ApodWidget from './ApodWidget';
import {apodWidgetPropsMock} from './ApodWidget.mocks';

storiesOf('ApodWidget', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <ApodWidget {...apodWidgetPropsMock} />);
