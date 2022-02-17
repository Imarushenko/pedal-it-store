import React from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";

import { CART } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function CartScreen({ navigation }) {


  let sum = 0,
    price = 0,
    shipping = 0;
  for (let i = 0; i < CART.length; i++) {
    price += CART[i].price;
    shipping += CART[i].shipping;
    sum += price + shipping;
  }
  return (
    <ScrollView
      style={
        ([styles.centerView], { width: "100%", backgroundColor: "#A9DFBF" })
      }
    >
      <View>
        <Text style={styles.cartTitleText}>CART</Text>
      </View>

      <ImageBackground
        style={styles.cartView}
        source={{ uri: CART[0].productImage }}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.cartTitleText}>{CART[0].product_title}</Text>
        </View>
      </ImageBackground>

      <ImageBackground
        style={styles.cartView}
        source={{ uri: CART[1].productImage }}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.cartTitleText}>{CART[1].product_title}</Text>
        </View>
      </ImageBackground>

      <ImageBackground
        style={styles.cartView}
        source={{ uri: CART[2].productImage }}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.cartTitleText}>{CART[2].product_title}</Text>
        </View>
      </ImageBackground>

      <ImageBackground
        style={styles.cartView}
        source={{ uri: CART[3].productImage }}
        resizeMode="cover"
      >
        <View>
          <Text style={styles.cartTitleText}>{CART[3].product_title}</Text>
        </View>
      </ImageBackground>

      <View style={styles.cartView}>
        <Text style={styles.cartTitleText}>
          {"Your Total Payment " + sum + "$"}
        </Text>
      </View>
    </ScrollView>
  );
}
