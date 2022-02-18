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
        <Text style={styles.headerTitle}>CART</Text>
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

      <TextInput
        placeholder="Enter a coupon..."
        placeholderTextColor={"#2E4053"}
        style={[styles.textInput, { fontSize: 30 }]}
      ></TextInput>

      <Pressable
        style={[
          styles.touchableOpacityStyle,
          { marginLeft: "35%", marginTop: 40 },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              textAlign: "center",
              marginTop: "6%",
              fontSize: 25,
              fontWeight: "bold",
            },
          ]}
        >
          Coupon
        </Text>
      </Pressable>

      <View style={[styles.cartView]}>
        <Text
          style={[
            styles.cartTitleText,
            {
              borderColor: "black",
              borderWidth: 4,
              marginRight: 15,
              borderRadius: 5,
              borderColor: "#E74C3C",
            },
          ]}
        >
          {"Your Total Payment  " + sum + " $"}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.touchableOpacityStyle,
          { marginLeft: "35%", backgroundColor: "#F7DC6F", marginTop: "1%" },
        ]}
        onPress={() => navigation.navigate("Payment Summary")}
      >
        <Text style={styles.cartTitleText}>Proceed to payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
