import {
  ContactForm,
  Raleway,
  ScreenWrapper,
  Spacer,
  SpacerVariant,
  Typography,
} from "../../../../components";
import React, { FC, useState } from "react";
import * as StoreReview from "expo-store-review";
import * as MailComposer from "expo-mail-composer";
import { Pressable, SafeAreaView, View } from "react-native";
import { AboutAppMask } from "../../../../../assets/svgs/AboutAppMask";
import { LogoShuttle } from "../../../../../assets/svgs/LogoShuttle";
import { styles } from "./AboutApp.styled";

const AboutAppScreen: FC = () => {
  const [isContactFormVisible, setIsContactFormVisible] =
    useState<boolean>(false);

  const requestReview = async () => {
    if (await StoreReview.hasAction()) {
      StoreReview.requestReview();
    }
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
              <Pressable style={styles.reviewButton} onPress={requestReview}>
                <Typography variant={Raleway.Bold} style={styles.buttonTitle}>
                  Review
                </Typography>
              </Pressable>
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
        onWriteEmailButtonPress={(subject) => {
          MailComposer.composeAsync({
            subject: subject,
          });
        }}
      />
    </ScreenWrapper>
  );
};

export default AboutAppScreen;
