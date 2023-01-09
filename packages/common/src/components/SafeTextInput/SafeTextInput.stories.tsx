import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import SafeTextInput from './SafeTextInput';
import {safeTextInputPropsMock} from './SafeTextInput.mocks';

storiesOf('SafeInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => {
    return <SafeTextInput {...safeTextInputPropsMock} />;
  });
