import {
  TextInput,
  ScrollView,
  View,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { createRef } from "react";
import { FormItem, submitForm, Form } from "react-native-form-component";
import { useState } from "react";
import styles from "../assets/Styles";
import UserDetails from "../models/UserDetails";

export default function PaymentScreen({ navigation }) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLasttName, setUserLasttName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardExDate, setCreditCardExDate] = useState("");
  const [cvv, setCvv] = useState("");

  if (userFirstName instanceof String && userFirstName > 0) {
    alert("User First Name Incoreect");
    setUserFirstName(true);
  }

  if (userLasttName instanceof String && userLasttName > 0) {
    alert("User Last Name Incoreect");
    setUserLasttName(true);
  }

  if (emailAddress instanceof String) {
    alert("Email Incorrect");
    setEmailAddress(true);
  }

  if (cellNumber instanceof Number && cellNumber > 0 && cellNumber <= 10) {
    alert("Cell Number Is Incoreect");
    setCellNumber(true);
  }

  if (country instanceof String) {
    alert("Country Incoreect");
    setCountry(true);
  }

  if (city instanceof String) {
    alert("City Incoreect");
    setCity(true);
  }

  if (address instanceof String) {
    alert("Address Incoreect");
    setAddress(true);
  }

  if (
    cardHolderName instanceof String &&
    cardHolderName > 0 &&
    cardHolderName < 25
  ) {
    alert("Card Holder Name Incoreect");
    cardHolderName(true);
  }

  if (idNumber instanceof Number && idNumber > 0 && idNumber <= 9) {
    alert("ID Number Incoreect");
    setIdNumber(true);
  }

  if (
    creditCardNumber instanceof Number &&
    creditCardNumber > 0 &&
    creditCardNumber <= 16
  ) {
    alert("Credit Card Number Incoreect");
    setCreditCardNumber(true);
  }

  if (creditCardExDate instanceof Date) {
    alert("Credit Card ExDate Incoreect");
    setCreditCardExDate(true);
  }

  if (cvv instanceof Number && cvv > 0 && cvv <= 3) {
    alert("Cvv Incoreect");
    setCvv(true);
  }

  return (
    <View style={styles.generalView}>
      <Text style={styles.cartTitleText}>Details and Paymnet</Text>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your First Name..."
        isRequired
        value={UserDetails.fName}
        onChangeText={(text) => setUserFirstName(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Last Name..."
        isRequired
        value={UserDetails.lName}
        onChangeText={(text) => setUserLasttName(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Email..."
        isRequired
        value={UserDetails.email}
        onChangeText={(text) => setEmailAddress(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Phone Nunber..."
        isRequired
        value={UserDetails.cellNumber}
        onChangeText={(cellNumber) => setCellNumber(cellNumber)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Country... "
        isRequired
        value={UserDetails.count}
        onChangeText={(text) => setCountry(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your City..."
        isRequired
        value={UserDetails.city}
        onChangeText={(text) => setCity(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Address..."
        isRequired
        value={UserDetails.address}
        onChangeText={(text) => setAddress(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Card Holder Name..."
        isRequired
        value={UserDetails.card}
        onChangeText={(text) => setCardHolderName(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your ID Number..."
        isRequired
        value={UserDetails.id}
        onChangeText={(idNumber) => setIdNumber(idNumber)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Credit Card..."
        isRequired
        value={UserDetails.creditCard}
        onChangeText={(text) => setCreditCardNumber(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Ex Date Card..."
        isRequired
        value={UserDetails.exCardDate}
        onChangeText={(Number) => setCreditCardExDate(Number)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Cvv Number..."
        isRequired
        value={UserDetails.cvv}
        onChangeText={(Number) => setCvv(Number)}
        asterik
      ></FormItem>

      <TouchableOpacity
        style={[
          styles.touchableOpacityStyle,
          {
            marginLeft: "35%",
            width: 160,
            height: 65,
            backgroundColor: "#F7DC6F",
          },
        ]}
        onPress={() => navigation.navigate("Summary")}
      >
        <Text style={[styles.cartTitleText, { padding: 10 }]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
