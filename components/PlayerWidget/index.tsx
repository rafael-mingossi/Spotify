import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const song = {
  id: "1",
  imageUri:
    "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170554/AFI-The-Art-of-Drowning.jpg",
  title: "High on you",
  artist: "Helen1",
};

//This component will dispplay
const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={24} color="white" />
          <FontAwesome name="play" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
