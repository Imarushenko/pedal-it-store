// imports
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Styles";

const ProductComponent = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelectProduct}>
      <View style={styles.containerOfProducts}>
        <ImageBackground
          source={{ uri: props.image }}
          resizeMode="contain"
          style={styles.background_image}
        >
          <Text style={styles.productTitle} numberOfLines={5}>
            {props.title}
          </Text>

          <Text style={styles.productPriceTitle} numberOfLines={5}>
            {"Price: " + props.price + ".00$"}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default ProductComponent;
