import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "../screens/Home";
import CodeOfConduct from "../screens/CodeOfConduct";

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: "Home"
      }
    },
    CodeOfConduct: {
      screen: CodeOfConduct,
      navigationOptions: {
        headerTitle: "Code of Conduct"
      }
    }
  },
  {
    mode: "modal",
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);
