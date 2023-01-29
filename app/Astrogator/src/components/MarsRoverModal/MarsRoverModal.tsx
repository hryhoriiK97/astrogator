import {Raleway, Typography} from '@astrogator/common';
import {FlashList} from '@shopify/flash-list';
import React, {FC} from 'react';
import {View} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';
import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';
import {MarsRoverModalProps} from './MarsRoverModal.props';
import {styles} from './MarsRoverModal.styled';

const MarsRoverModal: FC<MarsRoverModalProps> = ({rover}) => {
  const renderItem = ({
    item,
  }: {
    item: MarsRoverItemResponse['cameras'][number];
  }) => (
    <Typography
      variant={Raleway.Bold}
      color={AstrogatorColor.VenetianNights}
      style={styles.roverInfoText}>
      {`${item.full_name} (${item.name})`}
    </Typography>
  );
  return (
    <View style={styles.container}>
      <Typography
        variant={Raleway.Bold}
        style={styles.title}
        color={AstrogatorColor.White}>
        {rover.name}
      </Typography>
      <View style={styles.rowWrapper}>
        <Typography
          variant={Raleway.Bold}
          color={AstrogatorColor.VenetianNights}
          style={styles.roverInfoText}>
          Status:
        </Typography>
        <Typography
          variant={Raleway.Bold}
          color={
            rover.status === 'active'
              ? AstrogatorColor.Green
              : AstrogatorColor.Red
          }
          style={[styles.roverInfoText, styles.statusTitle]}>
          {rover.status}
        </Typography>
      </View>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.VenetianNights}
        style={styles.roverInfoText}>
        Launch Date: {rover.launch_date}
      </Typography>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.VenetianNights}
        style={styles.roverInfoText}>
        Landing Date: {rover.landing_date}
      </Typography>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.VenetianNights}
        style={styles.roverInfoText}>
        Total amount of photos: {rover.total_photos}
      </Typography>
      <Typography
        variant={Raleway.Bold}
        color={AstrogatorColor.VenetianNights}
        style={styles.roverInfoText}>
        {`Last earth date / mars sol: ${rover.max_date} / ${rover.max_sol}`}
      </Typography>
      <View>
        <Typography
          variant={Raleway.Bold}
          style={styles.title}
          color={AstrogatorColor.White}>
          {'Rover Cameras'}
        </Typography>
        <View style={styles.flashListHeight}>
          <FlashList
            bounces={false}
            data={rover.cameras}
            estimatedItemSize={25}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
};

export default MarsRoverModal;
