import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import Typography from './Typography';
import {typographyPropsMock} from './Typography.mocks';

storiesOf('Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Typography {...typographyPropsMock} />);
