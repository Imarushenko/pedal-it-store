// imports
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Styles";

// categories component
const CategoryComponent = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={[styles.containerOfProducts, { shadowColor: "green" }]}>
        <ImageBackground
          source={{ uri: props.image }}
          resizeMode="cover"
          style={styles.background_image}
        >
          <Text
            style={[styles.title, { fontSize: 35, color: "#DFFF00" }]}
            numberOfLines={1}
          >
            {props.title}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryComponent;
