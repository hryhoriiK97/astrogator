import {
  ApodWidget,
  Spacer,
  NasaAssetsHeader,
  SpacerVariant,
  LoadingScreen,
  ScrollToTopButton,
  ScreenWrapper,
  CustomBottomSheetBackdrop,
  CustomBottomSheetModalBackground,
  NasaAssetItemModal,
  EmptyDataIndicator,
  useNasaAssetsHeader,
  NasaAssetsInfoModal,
} from "../../../../components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { scale } from "react-native-size-matters";
import Animated, {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import React, { FC, useCallback, useRef, useState } from "react";

import { View } from "react-native";
import { useInfiniteQuery } from "react-query";
import { nasaAssetsAxiosInstance } from "../../../../api/nasaAssetsAxiosInstance";

import { commonStyles } from "../../../../theming/commonStyles";
import { styles } from "./NasaImages.styled";
import { EmptySpace } from "../../../../components/EmptySpace";
import { format } from "date-fns";
import { NasaAssetTransformed } from "../../../../types/NasaAssetTransformed";
import { RootStackNavigationProp } from "../../../Root/Root.routes";

enum NasaImagesScreenQueryKey {
  NasaImages = "NasaImages",
}

const AnimatedFlashList = Animated.createAnimatedComponent(
  FlashList<NasaAssetTransformed>
);

const NasaImagesScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [selectedNasaImageData, setSelectedNasaImageData] =
    useState<NasaAssetTransformed | null>(null);

  const [keywords, setKeywords] = useState<string | undefined>(undefined);

  const [isKeywordsQueryError, setIsKeywordsQueryError] =
    useState<boolean>(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const flashListRef = useRef<FlashList<NasaAssetTransformed>>(null);

  const scrollY = useSharedValue(0);
  const buttonOpacity = useSharedValue(0);

  const { scrollHandler, animatedHeaderStyle } = useNasaAssetsHeader(scrollY);

  const scrollToTop = (): void => {
    if (flashListRef && flashListRef.current) {
      flashListRef.current.scrollToOffset({
        animated: true,
        offset: 0,
      });
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

  const {
    data: nasaImagesResponse,
    isLoading: isNasaImagesLoading,
    refetch: nasaImagesRefetch,
    fetchNextPage: fetchNasaImagesNextPage,
    hasNextPage: hasNasaImagesNextPage,
    isFetchingNextPage: isNasaImagesFetchingNextPage,
    isError: isNasaImagesError,
  } = useInfiniteQuery(
    NasaImagesScreenQueryKey.NasaImages,
    async ({ pageParam = 1 }) => {
      const data = await nasaAssetsAxiosInstance.get(
        `/search?media_type=image&page=${pageParam}&keywords=${
          !!keywords ? keywords : "space,mars,saturn,venera,moon,milky"
        }`
      );
      return {
        data: data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (
          lastPage.data.data.collection.links &&
          !!lastPage.data.data.collection.links[0].prompt
        ) {
          return lastPage.nextPage;
        } else {
          return false;
        }
      },
      refetchOnWindowFocus: true,
    }
  );
  if (isNasaImagesLoading) {
    return <LoadingScreen />;
  }

  if (isNasaImagesError) {
    return (
      <View style={styles.emptyDataIndicatorWrapper}>
        <EmptyDataIndicator
          onRefreshButtonPress={() =>
            nasaImagesRefetch({ queryKey: NasaImagesScreenQueryKey.NasaImages })
          }
        />
      </View>
    );
  }

  const nasaImagesData: NasaAssetTransformed[] = nasaImagesResponse?.pages
    .length
    ? nasaImagesResponse.pages
        .flatMap((page) => page.data.data.collection.items)
        .map((item, index) => {
          return {
            id: index,
            src: item.links[0].href,
            title: item.data[0].title,
            explanation: item.data[0].description,
            author: item.data[0].center,
            date: format(new Date(item.data[0].date_created), "yyy-MM-dd"),
          };
        })
    : [];

  const loadNextPageData = () => {
    if (hasNasaImagesNextPage && nasaImagesData.length) {
      fetchNasaImagesNextPage();
    } else if (!nasaImagesData.length) {
      setIsKeywordsQueryError(true);
    }
  };

  const renderItem = ({ item }: { item: NasaAssetTransformed }) => {
    return (
      <ApodWidget
        id={`item.${item.id}.src`}
        imageSource={{ uri: item.src }}
        title={item.title}
        date={format(new Date(item.date), "yyy-MM-dd")}
        author={item.author}
        onLongPress={async () => {
          setSelectedNasaImageData(item);
          handlePresentModalPress();
        }}
        onPress={() => {
          navigation.navigate("NasaImageScreen", {
            id: `item.${item.id}.src`,
            item,
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
      <NasaAssetsHeader
        headerAnimatedStyle={animatedHeaderStyle}
        currentInputValue={keywords}
        onInputValueChange={setKeywords}
        onSearchButtonPress={() =>
          nasaImagesRefetch({ queryKey: [NasaImagesScreenQueryKey.NasaImages] })
        }
      />

      <AnimatedFlashList
        ref={flashListRef}
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaImagesData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        estimatedItemSize={scale(200)}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={
          <EmptySpace
            height={10}
            isLoaderShown={isNasaImagesFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
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
        <NasaAssetItemModal nasaAssetItemData={selectedNasaImageData!} />
      </BottomSheetModal>
      <ScrollToTopButton onPress={scrollToTop} buttonOpacity={buttonOpacity} />
      <NasaAssetsInfoModal
        isVisible={isKeywordsQueryError}
        onCloseModal={async () => {
          await setIsKeywordsQueryError(false);
          await setKeywords(undefined);
          await nasaImagesRefetch({
            queryKey: [NasaImagesScreenQueryKey.NasaImages],
          });
        }}
      />
    </ScreenWrapper>
  );
};

export default NasaImagesScreen;
