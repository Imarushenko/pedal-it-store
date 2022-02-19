// imports
import React from "react";
import styles from "../assets/Styles";
import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default function SummaryScreen({ navigation }) {
  const summary =
    "Your order has been placed! Thank you for shopping at Pedal It store";

  const symbol = "®";

  return (
    <ScrollView style={styles.generalView}>
      <View style={{ marginTop: "12%" }}>
        <Icon
          name="shopping"
          size={65}
          color="black"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {"  Order Submitted"}
        </Icon>
      </View>
      <View style={[styles.totalPaymentView, { marginTop: "30%" }]}>
        <Text style={styles.finalTitle}>{summary}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.touchableOpacityStyle,
          {
            marginLeft: "35%",
            backgroundColor: "#F7DC6F",
            height: 90,
            marginTop: "40%",
          },
        ]}
        onPress={() => navigation.navigate("Home - Pedal It Store")}
      >
        <Text style={styles.cartTitleText}>Continue Shopping</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        pedal it Store
        <Text style={[styles.footer, { fontSize: 35 }]}>{" " + symbol}</Text>
      </Text>
    </ScrollView>
  );
}
