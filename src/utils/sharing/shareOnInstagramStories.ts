import Share, { Social } from "react-native-share";
import { AstrogatorColor } from "../../theming/theme";

export const shareOnInstagramStories = async (uri: string) => {
  await Share.shareSingle({
    stickerImage: uri,
    social: Social.InstagramStories,
    backgroundTopColor: AstrogatorColor.VenetianNights,
    backgroundBottomColor: AstrogatorColor.Black,
    appId: "com.astrogator",
  }).catch((e) => {
    console.log(e);
  });
};
