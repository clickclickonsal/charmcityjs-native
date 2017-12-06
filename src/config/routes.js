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
        headerTitle: "Options"
      }
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
