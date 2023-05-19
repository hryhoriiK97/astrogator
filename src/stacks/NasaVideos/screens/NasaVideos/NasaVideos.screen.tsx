import {
  ApodWidget,
  Spacer,
  SpacerVariant,
  LoadingScreen,
  useScrollToTopButton,
  ScrollToTopButton,
  ScreenWrapper,
} from "../../../../components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

import React, { FC, useCallback, useRef, useState } from "react";
import { FlatList, Animated } from "react-native";
import { useInfiniteQuery } from "react-query";
import { nasaAssetsAxiosInstance } from "../../../../api/nasaAssetsAxiosInstance";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import { NasaAssetItemModal } from "../../../../components/NasaAssetItemModal";
import { commonStyles } from "../../../../theming/commonStyles";
import {
  NasaAssetItemData,
  NasaAssetItemResponse,
} from "../../../../types/NasaAssetItemResponse";
import {
  RootStackNavigationProp,
  RootStackRoutes,
} from "../../../Root/Root.routes";
import { SelectedVideoStackRoutes } from "../../../SelectedVideo/SelectedVideo.routes";
import { styles } from "./NasaVideos.styled";
import { EmptySpace } from "../../../../components/EmptySpace";

enum NasaVideosScreenQueryKey {
  NasaVideos = "NasaVideos",
}

const NasaVideosScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const flatListRef = useRef<FlatList>(null);

  const { scrollY, buttonOpacity } = useScrollToTopButton();

  const scrollToTop = (): void => {
    if (flatListRef && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

  const [selectedNasaVideoData, setSelectedNasaVideoData] =
    useState<NasaAssetItemData | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const {
    data: nasaVideosResponse,
    isLoading: isNasaVideosLoading,
    fetchNextPage: fetchNasaVideosNextPage,
    hasNextPage: hasNasaVideosNextPage,
    isFetchedAfterMount: isNasaVideosFetchedAfterMount,
    isFetchingNextPage: isNasaVideosFetchingNextPage,
    isError: isNasaVideosError,
  } = useInfiniteQuery(
    NasaVideosScreenQueryKey.NasaVideos,
    async ({ pageParam = 1 }) => {
      const data = await nasaAssetsAxiosInstance.get(
        `/search?media_type=video&page=${pageParam}&year_start=2023&keywords=space,mars,saturn,venera,moon,milky way`
      );
      return {
        data: data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (!!lastPage.data.data.collection.links[0].prompt) {
          return lastPage.nextPage;
        }
      },
    }
  );

  const loadNextPageData = () => {
    if (hasNasaVideosNextPage) {
      fetchNasaVideosNextPage();
    }
  };

  if (isNasaVideosFetchedAfterMount && isNasaVideosLoading) {
    return <LoadingScreen />;
  }

  const nasaVideosData: NasaAssetItemResponse[] = nasaVideosResponse?.pages
    .length
    ? nasaVideosResponse.pages.flatMap(
        (page) => page.data.data.collection.items
      )
    : [];

  const renderItem = ({ item }: { item: NasaAssetItemResponse }) => {
    const [imagePreview] = item.links;
    return (
      <ApodWidget
        id={item.data[0].nasa_id}
        title={item.data[0].title}
        date={item.data[0].date_created}
        author={item.data[0].secondary_creator || "-"}
        imageSource={{ uri: imagePreview.href }}
        onLongPress={async () => {
          setSelectedNasaVideoData(item.data[0]);
          handlePresentModalPress();
        }}
        onPress={() => {
          navigation.navigate(RootStackRoutes.SelectedVideoStack, {
            screen: SelectedVideoStackRoutes.SelectedVideoScreen,
            params: {
              videoCollectionUri: item.href,
            },
          });
        }}
      />
    );
  };

  const renderItemSeparator = () => {
    return <Spacer variant={SpacerVariant.Spacer_10_Vertical} />;
  };

  return (
    <ScreenWrapper>
      <Animated.FlatList
        ref={flatListRef}
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaVideosData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaVideosFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        backdropComponent={(props) => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={handleCloseModalPress}
          />
        )}
        backgroundComponent={CustomBottomSheetModalBackground}
        snapPoints={["50%"]}
        enableOverDrag={false}
        enableDismissOnClose={true}
      >
        <NasaAssetItemModal nasaAssetItemData={selectedNasaVideoData!} />
      </BottomSheetModal>
      <ScrollToTopButton onPress={scrollToTop} buttonOpacity={buttonOpacity} />
    </ScreenWrapper>
  );
};

export default NasaVideosScreen;
