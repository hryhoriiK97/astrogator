import React, { FC } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MarsRoversPhotosStackParamList } from "../../MarsRoversPhotos.routes";
import { styles } from "./MarsRoverPhotosFullList.styled";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { MarsRoverPhotoItemResponse } from "../../../../types/MarsRoverPhotoItemResponse";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const MarsRoverPhotosFullListScreen: FC = () => {
  const { goBack } = useNavigation();
  const route =
    useRoute<
      RouteProp<MarsRoversPhotosStackParamList, "MarsRoverPhotosFullList">
    >();
  const { marsPhotos } = route.params;

  const [setSelectedPhotoIndex] = useMarsRoversStore((state) => [
    state.setSelectedPhotoIndex,
  ]);

  const renderItem = ({
    item,
    index,
  }: {
    item: MarsRoverPhotoItemResponse;
    index: number;
  }) => (
    <Pressable
      style={styles.marsPhotoItemWrapper}
      onPress={(): void => {
        setSelectedPhotoIndex(index);
        goBack();
      }}
    >
      <Image
        style={styles.marsPhotoItem}
        source={{ uri: item.img_src }}
        placeholder={blurhash}
        cachePolicy={"memory"}
      />
    </Pressable>
  );

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <FlashList
          data={marsPhotos}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};

export default MarsRoverPhotosFullListScreen;
