import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginLeft: 5,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 15,
    margin: 5,
  },
  artist: {
    color: "lightgray",
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#252525",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  rightContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
});

export default styles;
