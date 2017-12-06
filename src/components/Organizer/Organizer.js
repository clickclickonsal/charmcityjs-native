import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";

import styles from "./styles";

const Organizer = ({ name, source }) => {
  const file = `../../../assets/organizers/${name.toLowerCase()}.jpg`;
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={source} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

Organizer.propTypes = {
  name: PropTypes.string,
  source: PropTypes.number
};

export default Organizer;
