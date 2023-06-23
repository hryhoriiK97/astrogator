import {
  ContactForm,
  Raleway,
  ScreenWrapper,
  Spacer,
  SpacerVariant,
  Typography,
} from "../../../../components";
import InAppReview from "react-native-in-app-review";
import { openComposer } from "react-native-email-link";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, View } from "react-native";
import { AboutAppMask } from "../../../../../assets/svgs/AboutAppMask";
import { LogoShuttle } from "../../../../../assets/svgs/LogoShuttle";
import { styles } from "./AboutApp.styled";

const AboutAppScreen: FC = () => {
  const [isContactFormVisible, setIsContactFormVisible] =
    useState<boolean>(false);

  const requestInAppReview = () => {
    InAppReview.RequestInAppReview();
  };
  return (
    <ScreenWrapper>
      <LogoShuttle style={styles.logoShuttle} />
      <AboutAppMask style={styles.mask} />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screen}>
          <Typography style={styles.title}>About App</Typography>
          <View style={styles.bottomContent}>
            <View>
              <Typography style={styles.subtitle}>Astrogator</Typography>
              <Spacer variant={SpacerVariant.Spacer_8_Vertical} />
              <Typography variant={Raleway.Light} style={styles.text}>
                Dive into the universe with Astrogator! Delve into captivating
                space trivia, marvel at celestial bodies in real time, and
                experience the mesmerizing allure of the vast cosmos.
              </Typography>
            </View>
            <Spacer variant={SpacerVariant.Spacer_50_Vertical} />
            <View>
              {InAppReview.isAvailable() && (
                <Pressable
                  style={styles.reviewButton}
                  onPress={requestInAppReview}
                >
                  <Typography variant={Raleway.Bold} style={styles.buttonTitle}>
                    Review
                  </Typography>
                </Pressable>
              )}
              <Spacer variant={SpacerVariant.Spacer_12_Vertical} />
              <Pressable
                style={styles.contactButton}
                onPress={() => setIsContactFormVisible(true)}
              >
                <Typography variant={Raleway.Bold} style={styles.buttonTitle}>
                  Contact
                </Typography>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ContactForm
        isVisible={isContactFormVisible}
        onCloseModal={() => setIsContactFormVisible(false)}
        onWriteEmailButtonPress={async (subject) => {
          await openComposer({
            to: "mosckalyuck@gmail.com",
            subject: subject ?? "",
          });
        }}
      />
    </ScreenWrapper>
  );
};

export default AboutAppScreen;
