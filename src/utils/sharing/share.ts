import Share from "react-native-share";
import { captureScreen } from "react-native-view-shot";

export const share = () => {
  captureScreen({
    format: "jpg",
    quality: 1,
  }).then(
    (uri) => {
      Share.open({
        filename: uri,
        url: uri,
      }).catch((err) => {
        err && console.log(err);
      });
    },
    (error) => console.error("Oops, snapshot failed", error)
  );
};
