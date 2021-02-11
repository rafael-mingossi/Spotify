import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        //the item is coming from the array albumCategories and it is the whole part from id: "1"
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
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
