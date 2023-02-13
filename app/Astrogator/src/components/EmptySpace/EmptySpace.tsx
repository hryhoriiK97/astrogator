import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';
import {EmptySpaceProps} from './EmptySpace.props';
import {styles} from './EmptySpace.styled';

const EmptySpace: FC<EmptySpaceProps> = ({height, isLoaderShown}) => {
  return (
    <View style={styles({height}).container}>
      {isLoaderShown && (
        <ActivityIndicator
          size={'small'}
          color={AstrogatorColor.VenetianNights}
        />
      )}
    </View>
  );
};

export default EmptySpace;
