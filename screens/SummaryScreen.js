import React from "react";
import styles from "../assets/Styles";
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

export default function SummaryScreen({navigation}) {
    const summary = "Your order has been placed!"

    return(
        <View style={styles.generalView}>
            <Text style={styles.productTitle}>
                {summary}
            </Text>
        </View>
    )
}