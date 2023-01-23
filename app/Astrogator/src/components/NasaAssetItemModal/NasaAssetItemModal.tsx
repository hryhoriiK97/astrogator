import {Divider, DividerVariant, Typography} from '@astrogator/common';
import {FlashList} from '@shopify/flash-list';
import {format} from 'date-fns';
import React, {FC} from 'react';
import {View} from 'react-native';
import {NasaAssetItemModalProps} from './NasaAssetItemModal.props';
import {styles} from './NasaAssetItemModal.styled';

const NasaAssetItemModal: FC<NasaAssetItemModalProps> = ({
  nasaAssetItemData,
}) => {
  const {title, description, date_created, secondary_creator, keywords} =
    nasaAssetItemData;

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.keywordItem}>
        <Typography numberOfLines={1} style={styles.keywordItemText}>
          {item}
        </Typography>
      </View>
    );
  };

  const renderSeparator = () => (
    <Divider variant={DividerVariant.Divider_5_Horizontal} />
  );
  return (
    <View style={styles.container}>
      <Typography style={styles.title}>{title}</Typography>
      <View style={styles.imageInfoWrapper}>
        <Typography numberOfLines={1} style={styles.imageInfoText}>
          {secondary_creator ?? '-'}
        </Typography>
        <Typography style={styles.imageInfoText}>
          {format(new Date(date_created), 'dd/MM/yyyy')}
        </Typography>
      </View>
      <Typography style={styles.description}>{description}</Typography>
      {!!keywords?.length && (
        <View style={styles.keywordsWrapper}>
          <FlashList
            data={keywords}
            renderItem={renderItem}
            horizontal={true}
            bounces={false}
            estimatedItemSize={36}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      )}
    </View>
  );
};

export default NasaAssetItemModal;
