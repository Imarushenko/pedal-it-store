import { TextInput, ScrollView, View, Text, Button } from "react-native";
import React, { createRef } from "react";
import { FormItem, submitForm, Form } from "react-native-form-component";
import { useState } from "react";
import styles from "../assets/Styles";
import UserDetails from "../models/UserDetails";

export default function PaymentScreen({ navigation }) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLasttName, setUserLasttName] = useState("");
  const [emailAddress, setEmailAddress] = useState(true);
  const [cellNumber, setCellNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardExDate, setCreditCardExDate] = useState("");
  const [cvv, setCvv] = useState("");

  //   if (emailAddress == "") {
  //     setEmailAddress(false);
  //   } else {
  //     setEmailAddress(true);
  //   }


  //////////////////////
  return (
    <View style={styles.generalView}>
      <Text style={styles.cartTitleText}>Details and Paymnet</Text>
      
      <FormItem
        style={{ margin: 15 }}
        placeholder="Email"
        isRequired
        value={UserDetails.email}
        onChangeText={(text) => setEmailAddress(text)}
        asterik
      ></FormItem>
    </View>
  );
}
