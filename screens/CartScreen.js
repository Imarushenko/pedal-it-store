// imports
import React from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
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

  const coupon_a = { name: "23sxfsf34%#vdf454gvbFDGSDVFds", discount: 0.2 };
  const coupon_b = { name: "DSF$%6hgfhgfH56nf6578ujhngfh", discount: 0.3 };
  const coupon_c = { name: "65fdGBVDBFt4r645645tbgfdRFY$%", discount: 0.05 };

  const symbol = "®";

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
        <Text style={styles.cartTitleText}>{CART[0].product_title}</Text>
      </ImageBackground>

      <ImageBackground
        style={styles.cartView}
        source={{ uri: CART[1].productImage }}
        resizeMode="cover"
      >
        <Text style={styles.cartTitleText}>{CART[1].product_title}</Text>
      </ImageBackground>

      <TextInput
        placeholder="Enter a coupon..."
        placeholderTextColor={"#2E4053"}
        style={[styles.textInput, { fontSize: 30 }]}
      ></TextInput>

      <TouchableOpacity
        onPress={() => {
          if (coupon_a) {
            return sum - coupon_a * sum;
          }
          if (coupon_b) {
            return sum - coupon_b * sum;
          } else if (coupon_c) {
            return sum - coupon_c * sum;
          }
        }}
      >
        <Text
          style={[
            styles.centerView,
            {
              marginTop: 5,
              color: "black",
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            },
          ]}
        >
          Use Coupon
        </Text>
        <Icon
          name="ticket-confirmation"
          size={55}
          color="black"
          style={{ textAlign: "center" }}
        ></Icon>
      </TouchableOpacity>

      <View style={styles.totalPaymentView}>
        <Icon
          name="credit-card"
          size={55}
          color="#0B5345"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {"Your Total Payment  " + sum + " $"}
        </Icon>
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
      <Text style={styles.footer}>
        pedal it store
        <Text style={[styles.footer, { fontSize: 35 }]}>{symbol}</Text>
      </Text>
    </ScrollView>
  );
}
