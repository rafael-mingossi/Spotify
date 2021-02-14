import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 8,
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 20,
  },
  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 20,
  },
  buttonText: {
    color: "lightgray",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#1CD05D",
    height: 50,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
