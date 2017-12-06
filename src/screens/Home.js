import React from "react";
import { Text, View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Container } from "../components/Container";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Image
          resizeMode="contain"
          source={require("../../assets/logos/charmcityjs.png")}
        />
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$primary",
    alignItems: "center",
    padding: 10
  }
});
