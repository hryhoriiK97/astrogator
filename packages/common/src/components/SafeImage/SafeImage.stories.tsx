import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import {SafeImage} from './index';
import {safeImagePropsMock} from './SafeImage.mocks';

storiesOf('SafeImage', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <SafeImage {...safeImagePropsMock} />)
  .add('WithDefaultSource', () => (
    <SafeImage {...{...safeImagePropsMock, source: {uri: ''}}} />
  ));
