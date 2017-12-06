import React from "react";
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Container } from "../components/Container";

export default class CodeOfConduct extends React.Component {
  render() {
    return (
      <Container>
        <Text>charmCityJS Anti-Harassment Policy</Text>
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
