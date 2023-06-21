import { Raleway, Typography } from "../../components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import { Image } from "expo-image";
import ViewShot from "react-native-view-shot";
import { InstagramIcon } from "../../../assets/svgs/socialMediasIcons/InstagramIcon";
import { shareOnInstagramStories } from "../../utils/sharing/shareOnInstagramStories";
import { MarsFullImageStackParamList } from "./MarsFullImage.routes";
import { styles } from "./MarsFullImage.styled";
import { Chevron } from "../../../assets/svgs/Chevron";

const MarsFullImageScreen: FC = () => {
  const route =
    useRoute<RouteProp<MarsFullImageStackParamList, "MarsFullImageScreen">>();
  const navigation = useNavigation();
  const {
    roverName,
    photoUri,
    cameraName,
    cameraAbbreviation,
    earthDate,
    marsSol,
  } = route.params;
  const [makeStories, setMakeStories] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Chevron rotate={180} />
      </Pressable>
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
            contentFit={"contain"}
          />
          <View style={styles.imageInformation}>
            <Typography style={styles.title}>
              {roverName} {cameraName} ({cameraAbbreviation})
            </Typography>
            <Typography variant={Raleway.Bold} style={styles.dateTitle}>
              {`Earth Date: ${earthDate}  Mars Sol: ${marsSol}`}
            </Typography>
          </View>
        </ViewShot>
        <Pressable
          style={styles.instagramStoriesShareButton}
          onPress={() => setMakeStories(true)}
        >
          <InstagramIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MarsFullImageScreen;
