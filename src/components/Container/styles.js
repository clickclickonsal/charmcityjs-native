import { Platform, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    "@media ios": {
      height: STATUSBAR_HEIGHT,
      backgroundColor: "$secondary"
    }
  },
  content: {
    backgroundColor: "$primary",
    flex: 1,
    alignItems: "center"
  }
});
