// imports
import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";
import SummaryScreen from "../screens/SummaryScreen";

// styles of the header
const defaultNavOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "" : "#2E4053",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "" : "white",
};

const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavOption}>
        <Stack.Screen
          name="Home - Pedal It Store"
          component={HomeScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Products - Total Items: 6"
          component={CategoriesScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Product Description"
          component={ProductsScreen}
        ></Stack.Screen>

        <Stack.Screen name="Your Cart" component={CartScreen}></Stack.Screen>

        <Stack.Screen
          name="Payment Summary"
          component={PaymentScreen}
        ></Stack.Screen>

        <Stack.Screen name="Summary" component={SummaryScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
