import { Typography } from "../../components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import { Image } from "expo-image";
// import ViewShot from "react-native-view-shot";
// import { InstagramIcon } from "../../../assets/svgs/socialMediasIcons/InstagramIcon";
// import { shareOnInstagramStories } from "../../utils/sharing/shareOnInstagramStories";
import { FullImageStackParamList } from "./FullImage.routes";
import { styles } from "./FullImage.styled";
import { Chevron } from "../../../assets/svgs/Chevron";

const FullImageScreen: FC = () => {
  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<FullImageStackParamList, "FullImageScreen">>();
  const { photoUri, title } = route.params;
  const [makeStories, setMakeStories] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Chevron rotate={180} />
        </Pressable>
        <View style={styles.container}>
          {/* <ViewShot
            style={styles.imageWrapper}
            captureMode={"update"}
            onCapture={async (uri) => {
              if (makeStories) {
                await shareOnInstagramStories(uri);
                setMakeStories(false);
              }
            }}
          > */}
          <Image
            style={styles.image}
            source={{ uri: photoUri }}
            cachePolicy={"memory"}
            contentFit={"contain"}
          />
          <Typography style={styles.title}>{title}</Typography>
          {/* </ViewShot> */}
          {/* <Pressable onPress={() => setMakeStories(true)}>
            <InstagramIcon />
          </Pressable> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FullImageScreen;
