import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/utils/CenterView';
import {coolCarouselMocks} from './CoolCarousel.mocks';
import {CoolCarousel} from './index';

storiesOf('CardWrapper', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <CoolCarousel {...coolCarouselMocks} />);
