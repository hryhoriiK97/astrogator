import {
  ApodWidget,
  Divider,
  DividerVariant,
  LoadingScreen,
} from "../../../../components";
import { useQuery } from "react-query";
import React, { FC } from "react";
import { NASA_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import * as Crypto from "expo-crypto";
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

  const apods = apodsResponse?.data;

  const renderItem = ({ item }: { item: ApodResponse }) => {
    return (
      <ApodWidget
        imageSource={{ uri: item.url }}
        title={item.title}
        date={item.date}
        author={item.copyright}
        onPress={() =>
          navigation.navigate("ApodStack", {
            screen: "ApodScreen",
            params: {
              apodDate: item.date,
            },
          })
        }
      />
    );
  };

  const renderItemSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
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
                screen: "ApodScreen",
                params: {
                  apodDate: format(date, "yyyy-MM-dd"),
                },
              });
            }
          }}
        />
        <FlashList
          data={apods.reverse()}
          renderItem={renderItem}
          /*Build a new build */
          // keyExtractor={() => Crypto.randomUUID()}
          keyExtractor={({ title }) => title}
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
