import {
  ApodWidget,
  Spacer,
  SpacerVariant,
  LoadingScreen,
} from "../../../../components";
import { useQuery } from "react-query";
import React, { FC } from "react";
import { NASA_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { format, subDays, isToday } from "date-fns";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";

import { ImageBackground, View } from "react-native";
import Background from "../../../../../assets/images/Group.png";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { EmptySpace } from "../../../../components/EmptySpace";
import { HomeHeader } from "../../../../components/HomeHeader";
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

  const renderItem = ({ item }: { item: ApodResponse }) => {
    return (
      <ApodWidget
        id={`item.${item.id}.url`}
        imageSource={{ uri: item.url }}
        title={item.title}
        date={item.date}
        author={item.copyright}
        onPress={() =>
          navigation.navigate("ApodStack", {
            id: `item.${item.id}.url`,
            item,
          })
        }
      />
    );
  };

  const renderItemSeparator = () => {
    return <Spacer variant={SpacerVariant.Spacer_10_Vertical} />;
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode={"cover"}
      progressiveRenderingEnabled={true}
      resizeMethod={"resize"}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.backdropWrapper} />
      <View style={styles.container}>
        <HomeHeader
          onDatePicking={async (date) => {
            if (!isToday(date)) {
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
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
