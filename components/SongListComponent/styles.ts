import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginLeft: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: "lightgray",
  },
  container: {
    flexDirection: "row",
    margin: 10,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 15,
  },
});

export default styles;
