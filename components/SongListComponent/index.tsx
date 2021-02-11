import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Song } from "../../types";

export type SongListItemProp = {
  song: Song;
};

const SongListItem = (props: SongListItemProp) => {
  const { song } = props; //this is to destruct song out of props (same as props.song.imageUri)
  return (
    <View>
      {/* Image Cover */}
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      {/* Title */}
      <Text style={styles.title}>{song.title}</Text>
      {/* Artist */}
      <Text style={styles.artist}>{song.artist}</Text>
    </View>
  );
};

export default SongListItem;
