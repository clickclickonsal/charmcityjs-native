import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigator from "./config/routes";

EStyleSheet.build({
  $primary: "#f1efe5",
  $secondary: "#EFDA5B"
});

export default () => <Navigator onNavigationStateChange={null} />;
