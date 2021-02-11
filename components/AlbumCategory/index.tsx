import React from "react";
import { FlatList, Text, View } from "react-native";
import { Album } from "../../types";
import AlbumComponent from "../Album";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [Album]; //this is from Album of types
};

//this function will use as props the AlbumCategoryProps to print the title and the list of albums (Album Component)
const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      {/* this will display the title of the category */}
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums} //the data that will be displayed, an array
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default AlbumCategory;
