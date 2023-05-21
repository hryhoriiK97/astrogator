import { LoadingScreen, ApodScreenContent } from "../../../../components";
import { NASA_API_KEY } from "@env";

import { RouteProp, useRoute } from "@react-navigation/native";
import { format, isFuture, isToday } from "date-fns";
import React, { FC } from "react";
import { useQuery } from "react-query";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";

import { ApodResponse } from "../../../../types/ApodResponse";
import { RootParamList } from "../../../Root/Root.routes";

enum ApodScreenQueryKey {
  Apod = "apod",
}

const ApodScreen: FC = () => {
  const route = useRoute<RouteProp<RootParamList, "ApodStack">>();

  const { id, apodDate, item } = route.params;

  const selectedApodDate = new Date(apodDate!);

  if (item.id) {
    return <ApodScreenContent id={id} item={item} />;
  } else {
    const {
      data: apodResponse,
      isLoading: isApodLoading,
      isError: isApodError,
      refetch: apodRefetch,
      isRefetching: isApodRefetching,
    } = useQuery(ApodScreenQueryKey.Apod, () => {
      if (apodDate) {
        return apodAxiosInstance.get(
          `/planetary/apod?api_key=${NASA_API_KEY}${
            !isToday(selectedApodDate) && !isFuture(selectedApodDate)
              ? "&date=" + format(selectedApodDate, "yyyy-MM-dd")
              : ""
          }`
        );
      }
    });
    if (isApodLoading || isApodRefetching) {
      return <LoadingScreen />;
    }

    const apodData: ApodResponse = apodResponse?.data;

    return <ApodScreenContent id={id} item={apodData} />;
  }
};

export default ApodScreen;
