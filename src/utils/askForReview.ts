import * as StoreReview from "expo-store-review";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const askForReview = async () => {
  // Check if the device supports reviews
  const isAvailableAsync = await StoreReview.isAvailableAsync();
  if (isAvailableAsync) {
    const lastReviewDate = await AsyncStorage.getItem("@lastReviewDate");
    const now = new Date();

    // If there is no recorded date, or if it has been 3-4 days since the last review request
    if (
      lastReviewDate &&
      Math.floor(
        (now.getTime() - new Date(lastReviewDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) >= 3
    ) {
      // Request review
      await StoreReview.requestReview();
      // Store the current date
      AsyncStorage.setItem("@lastReviewDate", now.toString());
    }
  }
};
