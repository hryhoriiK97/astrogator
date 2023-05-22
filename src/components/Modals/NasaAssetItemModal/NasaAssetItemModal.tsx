import { Spacer, SpacerVariant, Typography } from "../..";
import { FlashList } from "@shopify/flash-list";
import { format } from "date-fns";
import React, { FC } from "react";
import { View } from "react-native";
import { NasaAssetItemModalProps } from "./NasaAssetItemModal.props";
import { styles } from "./NasaAssetItemModal.styled";

const NasaAssetItemModal: FC<NasaAssetItemModalProps> = ({
  nasaAssetItemData,
}) => {
  const { title, explanation, date, author } = nasaAssetItemData;

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.keywordItem}>
        <Typography numberOfLines={1} style={styles.keywordItemText}>
          {item ?? "-"}
        </Typography>
      </View>
    );
  };

  const renderSeparator = () => (
    <Spacer variant={SpacerVariant.Spacer_5_Horizontal} />
  );
  return (
    <View style={styles.container}>
      <Typography style={styles.title}>{title}</Typography>
      <View style={styles.imageInfoWrapper}>
        <Typography numberOfLines={1} style={styles.imageInfoText}>
          {author ?? "-"}
        </Typography>
        <Typography style={styles.imageInfoText}>
          {format(new Date(date), "dd/MM/yyyy")}
        </Typography>
      </View>
      <Typography style={styles.description}>{explanation}</Typography>
      {/* {!!keywords?.length && (
        //TODO
        <View style={styles.keywordsWrapper}>
          <FlashList
            data={keywords}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={false}
            estimatedItemSize={36}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      )} */}
    </View>
  );
};

export default NasaAssetItemModal;
