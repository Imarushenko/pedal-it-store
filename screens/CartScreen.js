import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { PRODUCTS, CART } from "../data/Dummy-Data";
import styles from "../assets/Styles";
import { render } from "react-dom";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.centerView}>
      <Text style={styles.productTitle}>TEST</Text>
      <Button
        onPress={() => {
          console.log("Button Pressed");
          console.log("Cart: ");
          console.log(CART);
        }}
      >
        Button Test
      </Button>
    </View>
  );
}
