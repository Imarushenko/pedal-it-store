// imports
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Styles";

const ProductsItem = (props) => {
  // onSelectProduct refers to product screen>
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelectProduct}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: props.image }}
          resizeMode="cover"
          style={styles.background_image}
        >
          <Text style={styles.title} numberOfLines={1}>
            {props.title}
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            {props.price}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;
