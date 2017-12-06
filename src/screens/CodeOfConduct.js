import React from "react";
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Hyperlink from "react-native-hyperlink";

import { Container } from "../components/Container";

export default class CodeOfConduct extends React.Component {
  render() {
    return (
      <Container>
        <Text style={styles.subTitle}>charmCityJS Anti-Harassment Policy</Text>
        <Text style={styles.subText}>
          CharmCityJS is dedicated to providing a harassment-free meetup
          experience for everyone, regardless of gender, sexual orientation,
          disability, physical appearance, body size, race, or religion. We do
          not tolerate harassment of meetup participants in any form. Sexual
          language and imagery is not appropriate for any charmCityJS venue,
          including talks. Meetup participants violating these rules may be
          sanctioned or expelled from charmCityJS at the discretion of the
          meetup organizers.
        </Text>
        <Text style={styles.subText}>
          Harassment includes offensive verbal comments related to gender,
          sexual orientation, disability, physical appearance, body size, race,
          religion, sexual images in public spaces, deliberate intimidation,
          stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact,
          and unwelcome sexual attention. Participants asked to stop any
          harassing behavior are expected to comply immediately.
        </Text>
        <Text style={styles.subText}>
          If a participant engages in harassing behavior, the meetup organizers
          may take any action they deem appropriate, including warning the
          offender or expulsion from the meetup. If you are being harassed,
          notice that someone else is being harassed, or have any other
          concerns, please contact a member of meetup organizers immediately.
        </Text>
        <Text style={styles.subText}>
          Meetup organizers will be happy to help participants contact venue
          security or local law enforcement, provide escorts, or otherwise
          assist those experiencing harassment to feel safe for the duration of
          the meetup. We value your attendance.
        </Text>
        <Text style={styles.subTitle}>Important Contact Information</Text>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subText}>
            Event Organizers’ Email Address: charmcityjs@gmail.com
          </Text>
        </Hyperlink>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subText}>Law Enforcement: 911</Text>
        </Hyperlink>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subText}>Emergency Medical Assistance: 911</Text>
        </Hyperlink>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subText}>
            Baltimore Sexual Assault Hotline: (443) 279-0379
          </Text>
        </Hyperlink>
        <Text style={styles.subTitle}>Taxi Companies</Text>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subText}>
            Diamond Cab - (410) 947-3333 - www.diamondcab.com
          </Text>
        </Hyperlink>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subText}>
            Arrow Cab - (410) 261-0000 - www.arrowcabmd.com
          </Text>
        </Hyperlink>
        <Text style={styles.subTitle}>Important Contact Information</Text>
        <Text style={styles.subTitle}>Citations</Text>
        <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
          <Text style={styles.subTitle}>
            Adapted from
            http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy
          </Text>
        </Hyperlink>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 15
  },
  subText: {
    fontSize: 16,
    fontWeight: "300",
    paddingBottom: 20
  }
});
