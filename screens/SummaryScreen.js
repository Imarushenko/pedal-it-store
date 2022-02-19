import React from "react";
import styles from "../assets/Styles";
import { Text, ScrollView, TouchableOpacity, View, Footer } from "react-native";

export default function SummaryScreen({ navigation }) {
  const summary =
    "Your order has been placed! Thank you for shopping at Pedal It store";

  const symbol = "®";

  return (
    <ScrollView style={styles.generalView}>
      <View style={styles.totalPaymentView}>
        <Text style={styles.finalTitle}>{summary}</Text>
      </View>
      {/* <Text style={[styles.finalTitle, {paddingTop: 150, color: "#E74C3C"}]}>Thank you for shopping at " Pedal It "</Text> */}
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
        pedal it store
        <Text style={[styles.footer, { fontSize: 35 }]}>{symbol}</Text>
      </Text>
    </ScrollView>
  );
}
