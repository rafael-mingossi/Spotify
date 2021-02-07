import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import AlbumCategory from "../components/AlbumCategory";

const albumCategory = {
  id: "1",
  title: "Happy coding",
  albums: [
    {
      id: "1",
      imageUri:
        "https://i.pinimg.com/originals/31/a5/f8/31a5f8a724e12d133e08bb6d72d9ed57.jpg",
      artistHeadLine: "ACDC, Matellica, Megadeth",
    },
    {
      id: "2",
      imageUri:
        "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170545/Radiohead-Pablo-Honey-768x768.jpg",
      artistHeadLine: "ACDC, Matellica, Megadeth",
    },
    {
      id: "3",
      imageUri:
        "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170554/AFI-The-Art-of-Drowning.jpg",
      artistHeadLine: "Anthrax, NOFX",
    },
  ],
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory
        title={albumCategory.title}
        albums={albumCategory.albums}
      />
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
