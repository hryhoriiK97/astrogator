import {
  Spacer,
  SpacerVariant,
  SafeImage,
  Typography,
} from "../../../../components";
import { SharedElement } from "react-navigation-shared-element";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import React, { FC, useCallback, useRef } from "react";
import { Platform, ScrollView, StatusBar, View } from "react-native";
import { BackButton } from "../../../../components/BackButton";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import { HomeTileModal } from "../../../../components/HomeTileModal";
import { ImageActionsTab } from "../../../../components/ImageActionsTab";
import { commonStyles } from "../../../../theming/commonStyles";
import { getBottomModalSnapPoint } from "../../../../utils/getBottomModalSnapPoint";
import { styles } from "./NasaImage.styled";
import { MobilePlatform } from "../../../../enums/MobilePlatform";
import {
  RootParamList,
  RootStackNavigationProp,
} from "../../../Root/Root.routes";

const NasaImageScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const route = useRoute<RouteProp<RootParamList, "NasaImageScreen">>();

  const { id, item } = route.params;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const apodExplanationArray = item.explanation.split(" ");
  return (
    <>
      <StatusBar hidden translucent={true} showHideTransition={"fade"} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.apodHeader}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <SharedElement id={id}>
          <SafeImage
            source={{
              uri: item.src,
            }}
            defaultSource={require("../../../../../assets/images/apod-tile.webp")}
            imageStyle={styles.image}
            imageWrapperStyle={styles.imageWrapper}
          />
        </SharedElement>
        <Typography style={styles.title}>{item.title}</Typography>
        <View style={styles.subheader}>
          <View style={styles.imageInfoWrapper}>
            <Typography style={styles.subheaderText}>
              Author: {item.author || "-"}
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_2_Vertical} />
            <Typography style={styles.subheaderText}>
              Date: {format(new Date(item.date), "yyyy-MM-dd")}
            </Typography>
          </View>
          <ImageActionsTab
            onMagnifierButtonPress={() =>
              navigation.navigate("FullImageStack", {
                screen: "FullImageScreen",
                params: {
                  photoUri: item.src,
                  title: item.title,
                },
              })
            }
          />
        </View>
        <Typography style={styles.explanation} ellipsizeMode={"clip"}>
          {apodExplanationArray
            .slice(0, Platform.OS === MobilePlatform.Android ? 70 : 90)
            .join(" ")}{" "}
          {((Platform.OS === MobilePlatform.IOS &&
            apodExplanationArray.length >= 90) ||
            (Platform.OS === MobilePlatform.Android &&
              apodExplanationArray.length >= 70)) && (
            <Typography
              onPress={handlePresentModalPress}
              style={styles.readMoreButton}
            >
              read more...
            </Typography>
          )}
        </Typography>
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
          snapPoints={[getBottomModalSnapPoint(item.explanation.length)]}
          enableOverDrag={false}
          enableDismissOnClose={true}
        >
          <HomeTileModal title={item.title} description={item.explanation} />
        </BottomSheetModal>
      </ScrollView>
    </>
  );
};

export default NasaImageScreen;
