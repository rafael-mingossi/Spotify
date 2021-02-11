import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const album = {
  id: "6",
  name: "Good Vibes",
  by: "Spotiyfy",
  numberOfLikes: 38,
  imageUri:
    "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170554/AFI-The-Art-of-Drowning.jpg",
  artistHeadLine: "Carnaval e roberto carlos",
  songs: [
    {
      id: "1",
      imageUri:
        "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170554/AFI-The-Art-of-Drowning.jpg",
      title: "High on you",
      artist: "Helen1",
    },
    {
      id: "2",
      imageUri:
        "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170554/AFI-The-Art-of-Drowning.jpg",
      title: "High on you",
      artist: "Helen2",
    },
    {
      id: "3",
      imageUri:
        "https://glide-assets-media.s3.amazonaws.com/wp-content/uploads/2013/10/21170554/AFI-The-Art-of-Drowning.jpg",
      title: "High on you",
      artist: "Helen3",
    },
  ],
};

const AlbumScreen = () => {
  const route = useRoute();

  //will generate the data of the clicked album in a object array
  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello Album Screen</Text>
    </View>
  );
};

export default AlbumScreen;
