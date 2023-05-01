import {
  ApodWidget,
  Spacer,
  SpacerVariant,
  LoadingScreen,
} from "../../../../components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React, { FC, useCallback, useRef, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "react-query";
import { nasaAssetsAxiosInstance } from "../../../../api/nasaAssetsAxiosInstance";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import NasaAssetItemModal from "../../../../components/NasaAssetItemModal/NasaAssetItemModal";
import { commonStyles } from "../../../../theming/commonStyles";
import {
  NasaAssetItemData,
  NasaAssetItemResponse,
} from "../../../../types/NasaAssetItemResponse";
import { RootStackNavigationProp } from "../../../Root/Root.routes";
import { styles } from "./NasaImages.styled";
import { EmptySpace } from "../../../../components/EmptySpace";
import { format } from "date-fns";

enum NasaImagesScreenQueryKey {
  NasaImages = "NasaImages",
}

const NasaImagesScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {
    data: nasaImagesResponse,
    isLoading: isNasaImagesLoading,
    fetchNextPage: fetchNasaImagesNextPage,
    hasNextPage: hasNasaImagesNextPage,
    isFetchedAfterMount: isNasaImagesFetchedAfterMount,
    isFetchingNextPage: isNasaImagesFetchingNextPage,
    isError: isImagesRoversError,
  } = useInfiniteQuery(
    NasaImagesScreenQueryKey.NasaImages,
    async ({ pageParam = 1 }) => {
      const data = await nasaAssetsAxiosInstance.get(
        `/search?media_type=image&page=${pageParam}&year_start=2023&keywords=space,mars,saturn,venera,moon,milky way`
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
    if (hasNasaImagesNextPage) {
      fetchNasaImagesNextPage();
    }
  };

  const [selectedNasaImageData, setSelectedNasaImageData] =
    useState<NasaAssetItemData | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  if (isNasaImagesFetchedAfterMount && isNasaImagesLoading) {
    return <LoadingScreen />;
  }

  const nasaImagesData: NasaAssetItemResponse[] = nasaImagesResponse?.pages
    .length
    ? nasaImagesResponse.pages.flatMap(
        (page) => page.data.data.collection.items
      )
    : [];

  const renderItem = ({ item }: { item: NasaAssetItemResponse }) => {
    const [imagePreview] = item.links;
    return (
      <ApodWidget
        imageSource={{ uri: imagePreview.href }}
        title={item.data[0].title}
        date={format(new Date(item.data[0].date_created), "yyy-MM-dd")}
        author={item.data[0].center}
        onLongPress={async () => {
          setSelectedNasaImageData(item.data[0]);
          handlePresentModalPress();
        }}
        onPress={() => {
          navigation.navigate("AssetStack", {
            screen: "AssetScreen",
            params: {
              asset: item,
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
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainerStyle}
        data={nasaImagesData}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={145}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={
          <EmptySpace
            height={90}
            isLoaderShown={isNasaImagesFetchingNextPage}
          />
        }
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.2}
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
    </View>
  );
};

export default NasaImagesScreen;