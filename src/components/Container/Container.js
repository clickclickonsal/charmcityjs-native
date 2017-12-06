import PropTypes from "prop-types";
import React from "react";
import { ScrollView, View, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./styles";

const Container = ({ children }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={EStyleSheet.value("$secondary")}
        barStyle={"dark-content"}
      />
      <View style={styles.header} />
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
};

export default Container;
