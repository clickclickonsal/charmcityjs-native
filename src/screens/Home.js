import React from "react";
import { Text, View, Image, Linking } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Hyperlink from "react-native-hyperlink";

import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Organizer } from "../components/Organizer";

export default class Home extends React.Component {
  seeOurEvents = () => {
    Linking.openURL("https://www.meetup.com/charmcityjs/");
  };
  submitATalk = () => {
    Linking.openURL("https://github.com/charmcityjs/talks");
  };
  goToCodeOfConduct = () => {
    this.props.navigation.navigate("CodeOfConduct");
  };
  render() {
    return (
      <Container>
        <Image
          resizeMode="contain"
          source={require("../../assets/logos/charmcityjs.png")}
        />
        <View style={styles.container}>
          <Button text="See Our Events" onPress={this.seeOurEvents} />
          <Button text="Submit A Talk Idea" onPress={this.submitATalk} />
          <Button text="Code Of Conduct" onPress={this.goToCodeOfConduct} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>Oh, hey.</Text>
          <Text style={styles.subText}>
            We're Baltimore's JavaScript community and we want to hang out with
            you. Check out our First Wednesday meetups or submit a talk idea of
            your own! We really do want to hang out with you, and we've got a
            code of conduct that's really important to us. Please read and
            follow it if you want to hang out too, thanks. :D
          </Text>
          <Text style={styles.subTitle}>Our Organizers.</Text>
          <Text style={styles.subText}>
            Hi, this is what we look like! We love making CCJS run. Find any of
            us at any event and say hello, or email us at charmcityjs@gmail.com
            any time.
          </Text>
          <View style={styles.container}>
            <Organizer
              name="Jason"
              source={require("../../assets/organizers/jason.jpg")}
            />
            <Organizer
              name="Hyein"
              source={require("../../assets/organizers/hyein.jpg")}
            />
            <Organizer
              name="Olivia"
              source={require("../../assets/organizers/olivia.jpg")}
            />
          </View>
          <View style={styles.container}>
            <Organizer
              name="Jose"
              source={require("../../assets/organizers/jose.jpg")}
            />
            <Organizer
              name="Eric"
              source={require("../../assets/organizers/eric.jpg")}
            />
            <Organizer
              name="Sal"
              source={require("../../assets/organizers/sal.jpg")}
            />
          </View>
          <Text style={styles.subTitle}>Join Our Slack team</Text>
          <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
            <Text style={styles.subText}>
              click here for an invite -----> http://charmcityjs.herokuapp.com/
            </Text>
          </Hyperlink>
          <Text style={styles.subText}>
            Slack is where we all virtually hang out in between our in-person
            events. Come say hello, ask questions about JavaScript, about
            Baltimore in general, or anything you want!
          </Text>
          <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
            <Text style={styles.subText}>
              Give us your email here (or at charmcityjs.herokuapp.com) and
              we'll email you an invite so you can sign up and join us! (Didn't
              get an invite? Email us at charmcityjs@gmail.com and we'll get it
              fixed ASAP.
            </Text>
          </Hyperlink>
          <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
            <Text style={styles.subText}>
              Never heard of Slack? It's a popular, free chat app used by
              businesses and communities all over the world. Learn more at
              slack.com
            </Text>
          </Hyperlink>
        </View>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contentContainer: {
    padding: 20
  },
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
