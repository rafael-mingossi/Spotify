import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Album from "../components/Album";

const album = {
  id: "1",
  imageUri:
    "https://i.pinimg.com/originals/31/a5/f8/31a5f8a724e12d133e08bb6d72d9ed57.jpg",
  artistHeadLine: "Taylor Swift, Avicci",
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
