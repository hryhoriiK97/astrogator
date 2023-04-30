import { Typography } from "../../components";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import ViewShot from "react-native-view-shot";
import { InstagramIcon } from "../../../assets/svgs/socialMediasIcons/InstagramIcon";
import { shareOnInstagramStories } from "../../utils/sharing/shareOnInstagramStories";
import { FullImageStackParamList } from "./FullImage.routes";
import { styles } from "./FullImage.styled";

const FullImageScreen: FC = () => {
  const route =
    useRoute<RouteProp<FullImageStackParamList, "FullImageScreen">>();
  const { photoUri, title } = route.params;
  const [makeStories, setMakeStories] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <ViewShot
        style={styles.imageWrapper}
        captureMode={"update"}
        onCapture={async (uri) => {
          if (makeStories) {
            await shareOnInstagramStories(uri);
            setMakeStories(false);
          }
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: photoUri }}
          resizeMode={"cover"}
          cachePolicy={"memory"}
          contentFit={"contain"}
        />
        <Typography style={styles.title}>{title}</Typography>
      </ViewShot>
      <Pressable
        style={styles.instagramStoriesShareButton}
        onPress={() => setMakeStories(true)}
      >
        <InstagramIcon />
      </Pressable>
    </View>
  );
};

export default FullImageScreen;
