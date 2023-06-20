import {
  ApodWidget,
  Spacer,
  SpacerVariant,
  LoadingScreen,
  ScrollToTopButton,
  ScreenWrapper,
  CustomBottomSheetBackdrop,
  CustomBottomSheetModalBackground,
  EmptyDataIndicator,
  NasaAssetsHeader,
  useNasaAssetsHeader,
} from "../../../../components";
import { format } from "date-fns";
import Animated, {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { FlashList } from "@shopify/flash-list";
import { scale } from "react-native-size-matters";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

import React, { FC, useCallback, useRef, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "react-query";
import { nasaAssetsAxiosInstance } from "../../../../api/nasaAssetsAxiosInstance";

import { NasaAssetItemModal } from "../../../../components/Modals/NasaAssetItemModal";
import { commonStyles } from "../../../../theming/commonStyles";
import { RootStackNavigationProp } from "../../../Root/Root.routes";
import { styles } from "./NasaVideos.styled";
import { EmptySpace } from "../../../../components/EmptySpace";
import { NasaAssetTransformed } from "../../../../types/NasaAssetTransformed";

enum NasaVideosScreenQueryKey {
  NasaVideos = "NasaVideos",
}

const AnimatedFlashList = Animated.createAnimatedComponent(
  FlashList<NasaAssetTransformed>
);

const NasaVideosScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const flashListRef = useRef<FlashList<NasaAssetTransformed>>(null);

  const scrollY = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);

  const { scrollHandler, animatedHeaderStyle } = useNasaAssetsHeader(scrollY);

  const scrollToTop = (): void => {
    if (flashListRef && flashListRef.current) {
      flashListRef.current.scrollToIndex({ index: 0, animated: true });
    }
  };

  useAnimatedReaction(
    () => {
      return scrollY.value;
    },
    (scrollYValue) => {
      if (scrollYValue >= 500) {
        buttonOpacity.value = withTiming(1);
      } else {
        buttonOpacity.value = withTiming(0);
      }
    }
  );

  const [selectedNasaVideoData, setSelectedNasaVideoData] =
    useState<NasaAssetTransformed | null>(null);

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
    refetch: nasaVideosRefetch,
    isRefetching: isNasaVideosRefetching,
    fetchNextPage: fetchNasaVideosNextPage,
    hasNextPage: hasNasaVideosNextPage,
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
      refetchOnWindowFocus: true,
    }
  );

  const loadNextPageData = () => {
    if (hasNasaVideosNextPage) {
      fetchNasaVideosNextPage();
    }
  };

  if (isNasaVideosLoading) {
    return <LoadingScreen />;
  }

  if (isNasaVideosError) {
    return (
      <View style={styles.emptyDataIndicatorWrapper}>
        <EmptyDataIndicator
          onRefreshButtonPress={() =>
            nasaVideosRefetch({ queryKey: NasaVideosScreenQueryKey.NasaVideos })
          }
        />
      </View>
    );
  }

  const nasaVideoItemsResponse = nasaVideosResponse?.pages.length
    ? nasaVideosResponse.pages
    : [];
  const nasaVideosData: NasaAssetTransformed[] = nasaVideoItemsResponse
    .flatMap((page) => page.data.data.collection.items)
    .map((item, index) => {
      return {
        id: index,
        src: item.links[0].href,
        title: item.data[0].title,
        explanation: item.data[0].description,
        author: item.data[0].secondary_creator,
        date: format(new Date(item.data[0].date_created), "yyy-MM-dd"),
        videoUrl: item.href,
      };
    });

  const renderItem = ({ item }: { item: NasaAssetTransformed }) => {
    return (
      <ApodWidget
        id={`item.${item.id}.src`}
        title={item.title}
        date={item.date}
        author={item.author || "-"}
        imageSource={{ uri: item.src }}
        onLongPress={async () => {
          setSelectedNasaVideoData(item!);
          handlePresentModalPress();
        }}
        onPress={() => {
          navigation.navigate("NasaVideoScreen", {
            id: `item.${item.id}.src`,
            item: item,
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
      <NasaAssetsHeader headerAnimatedStyle={animatedHeaderStyle} />
      <AnimatedFlashList
        ref={flashListRef}
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaVideosData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        estimatedItemSize={scale(200)}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaVideosFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
        onScroll={scrollHandler}
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
