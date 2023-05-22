import { View } from "react-native";
import { useQuery } from "react-query";
import React, { FC } from "react";
import { NASA_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { format, subDays, isToday } from "date-fns";

import {
  ApodWidget,
  Spacer,
  SpacerVariant,
  LoadingScreen,
  ScreenWrapper,
  EmptySpace,
  HomeHeader,
  EmptyDataScreen,
} from "../../../../components";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";

import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";

import { ApodResponse } from "../../../../types/ApodResponse";
import { RootStackNavigationProp } from "../../../Root/Root.routes";
import { styles } from "./Home.styled";

const { bp } = getRelativeUnits();

enum HomeScreenQueryKey {
  Apod = "Apod",
}

const HomeScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {
    data: apodsResponse,
    isLoading: isApodLoading,
    isError: isApodError,
  } = useQuery(HomeScreenQueryKey.Apod, () =>
    apodAxiosInstance.get(
      `/planetary/apod?start_date=${format(
        subDays(new Date(), 20),
        "yyyy-MM-dd"
      )}&api_key=${NASA_API_KEY}`
    )
  );

  if (isApodLoading) {
    return <LoadingScreen />;
  }

  const apods: ApodResponse[] = apodsResponse?.data
    ? apodsResponse.data.map((apod: ApodResponse, index: number) => {
        return { ...apod, id: index };
      })
    : [];

  const isEmptyApodsList = !apods.length;

  const renderItem = ({ item }: { item: ApodResponse }) => {
    return (
      <ApodWidget
        id={`item.${item.id}.url`}
        imageSource={{ uri: item.url }}
        title={item.title}
        date={item.date}
        author={item.copyright}
        onPress={() => {
          navigation.navigate("ApodStack", {
            id: `item.${item.id}.url`,
            apodDate: undefined,
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
      <View style={styles.container}>
        <HomeHeader
          onDatePicking={async (date) => {
            if (!isToday(date)) {
              console.log(format(date, "yyyy-MM-dd"));
              navigation.navigate("ApodStack", {
                id: "apod-id",
                apodDate: format(date, "yyyy-MM-dd"),
                item: {} as ApodResponse,
              });
            }
          }}
        />
        <FlashList
          data={apods.reverse()}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
          ListFooterComponent={<EmptySpace />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderItemSeparator}
          estimatedItemSize={200 * bp}
          ListEmptyComponent={
            isEmptyApodsList ? (
              <EmptyDataScreen text={"No data"} />
            ) : isApodError ? (
              <EmptyDataScreen text={"No data"} />
            ) : undefined
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
