import React, { FC, useRef } from "react";
import {
  Animated,
  Pressable,
  SafeAreaView,
  View,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MarsRoversPhotosStackParamList } from "../../MarsRoversPhotos.routes";
import { styles } from "./MarsRoverPhotosFullList.styled";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { MarsRoverPhotoItemResponse } from "../../../../types/MarsRoverPhotoItemResponse";
import {
  ScreenWrapper,
  ScrollToTopButton,
  Spacer,
  SpacerVariant,
  Typography,
  useScrollToTopButton,
} from "../../../../components";
import { AstrogatorColor } from "../../../../theming/theme";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const MarsRoverPhotosFullListScreen: FC = () => {
  const { goBack } = useNavigation();
  const route =
    useRoute<
      RouteProp<MarsRoversPhotosStackParamList, "MarsRoverPhotosFullList">
    >();
  const { marsPhotos, marsRoverName } = route.params;

  const flatListRef = useRef<FlatList<MarsRoverPhotoItemResponse>>(null);

  const { scrollY, buttonOpacity } = useScrollToTopButton();

  const [setSelectedPhotoIndex] = useMarsRoversStore((state) => [
    state.setSelectedPhotoIndex,
  ]);

  const scrollToTop = (): void => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

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
        cachePolicy={"memory-disk"}
      />
    </Pressable>
  );

  return (
    <ScreenWrapper>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Animated.FlatList
          ref={flatListRef}
          data={marsPhotos}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <View>
                <Typography style={styles.title}>Gallery</Typography>
                <Spacer variant={SpacerVariant.Spacer_5_Vertical} />
                <Typography style={styles.roverName}>
                  {marsRoverName}
                </Typography>
              </View>
              <Pressable onPress={goBack}>
                <Typography color={AstrogatorColor.White}>Back</Typography>
              </Pressable>
            </View>
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        />
        <ScrollToTopButton
          onPress={scrollToTop}
          buttonOpacity={buttonOpacity}
        />
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default MarsRoverPhotosFullListScreen;
