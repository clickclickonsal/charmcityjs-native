import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "$black",
    marginHorizontal: 5,
    width: "30%",
    justifyContent: "center"
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: "$white",
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontWeight: "600",
    textAlign: "center"
  }
});
