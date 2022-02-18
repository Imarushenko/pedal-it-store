import React from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { CART } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function CartScreen({ navigation }) {
  let sum = 0,
    price = 0,
    shipping = 0;
  for (let i = 0; i < CART.length; i++) {
    price = CART[i].price;
    shipping = CART[i].shipping;
    sum += price + shipping;
  }

  // coupons
  const coupon_a = { name: "23sxfsf34%#vdf454gvbFDGSDVFds", discount: 0.2 };
  const coupon_b = { name: "DSF$%6hgfhgfH56nf6578ujhngfh", discount: 0.3 };
  const coupon_c = { name: "65fdGBVDBFt4r645645tbgfdRFY$%", discount: 0.05 };

  return (
    <ScrollView style={styles.generalView}>
      <View>
        <Text style={[styles.cartTitleText, { fontSize: 60, color: "black" }]}>
          CART
        </Text>
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

      {/* <ImageBackground
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
      </ImageBackground> */}

      {/* <Text style={styles.cartTitleText}>
        Have A Coupon ? Enter The Coupon Code Below
      </Text>

      <TextInput style={styles.textInput}></TextInput>

      <Pressable style={styles.button}>
        <Text style={styles.text}>Coupon</Text>
      </Pressable> */}

      <View style={styles.cartView}>
        <Text style={styles.cartTitleText}>
          {"Your Total Payment  " + sum + " $"}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.touchableOpacityStyle,
          { marginLeft: "35%", backgroundColor: "#F7DC6F" },
        ]}
        onPress={() => navigation.navigate("Payment Summary")}
      >
        <Text style={styles.cartTitleText}>Proceed to payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
