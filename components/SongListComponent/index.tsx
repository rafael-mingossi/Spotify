import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Song } from "../../types";

export type SongListItemProp = {
  song: Song;
};

//This component will dispplay
const SongListItem = (props: SongListItemProp) => {
  const { song } = props; //this is to destruct song out of props (same as props.song.imageUri)
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
