// imports
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FormItem } from "react-native-form-component";
import { useState } from "react";
import styles from "../assets/Styles";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
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

  const symbol = "®";

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

  const details = "Please fill up your details";
  const payment = "Please fill up your credit card details";

  return (
    <View style={styles.generalView}>
      <View style={styles.totalPaymentView}>
        <Icon
          name="information"
          size={30}
          color="#212F3D"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {"  " + details}
        </Icon>
      </View>

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
        placeholder="Enter Your Email Address..."
        isRequired
        value={UserDetails.email}
        onChangeText={(text) => setEmailAddress(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Phone Number..."
        isRequired
        value={UserDetails.cellNumber}
        onChangeText={(cellNumber) => setCellNumber(cellNumber)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Country Name... "
        isRequired
        value={UserDetails.count}
        onChangeText={(text) => setCountry(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your City Name..."
        isRequired
        value={UserDetails.city}
        onChangeText={(text) => setCity(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Resident Address..."
        isRequired
        value={UserDetails.address}
        onChangeText={(text) => setAddress(text)}
        asterik
      ></FormItem>

      <View style={styles.totalPaymentView}>
        <Icon
          name="credit-card"
          size={30}
          color="#212F3D"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {"  " + payment}
        </Icon>
      </View>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Full Card Holder Name..."
        isRequired
        value={UserDetails.card}
        onChangeText={(text) => setCardHolderName(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Card Holder ID Number..."
        isRequired
        value={UserDetails.id}
        onChangeText={(idNumber) => setIdNumber(idNumber)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Credit Card Number..."
        isRequired
        value={UserDetails.creditCard}
        onChangeText={(text) => setCreditCardNumber(text)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Card Expiry Date..."
        isRequired
        value={UserDetails.exCardDate}
        onChangeText={(Number) => setCreditCardExDate(Number)}
        asterik
      ></FormItem>

      <FormItem
        style={{ margin: 15 }}
        placeholder="Enter Your Card's CVV Number..."
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
      <Text style={styles.footer}>
        pedal it store
        <Text style={[styles.footer, { fontSize: 35 }]}>{"  " + symbol}</Text>
      </Text>
    </View>
  );
}
