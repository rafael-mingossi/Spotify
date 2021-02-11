import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Album } from "../../types";

export type AlbumProps = {
  album: Album;
};

//this function will generate the Album compenent with a image of the cover and a text with the headLine of the album
//it uses the types from the Album type from types
//this is the smallest compenent and will be rendered in a bigger component (Album Category)
const AlbumComponent = (props: AlbumProps) => {
  //to change screens use this function and import it above
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id }); //use the name given on BottomTabNavigator
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistHeadLine}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
