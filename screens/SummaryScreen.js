import React from "react";
import styles from "../assets/Styles";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function SummaryScreen({ navigation }) {
  const summary = "Your order has been placed!";

  return (
    <ScrollView style={styles.generalView}>

      <Text style={styles.finalTitle}>{summary}</Text>

      <Text style={[styles.finalTitle, {paddingTop: 150, color: "#E74C3C"}]}>Thank you for shopping at " Pedal It "</Text>
      <TouchableOpacity
        style={[
          styles.touchableOpacityStyle,
          { marginLeft: "35%", backgroundColor: "#F7DC6F", height: 90, marginTop: "40%" },
        ]}
        onPress={() => navigation.navigate("Home - Pedal It Store")}
      >
        <Text style={styles.cartTitleText}>Continue Shopping</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
