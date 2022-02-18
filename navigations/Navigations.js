import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";


const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home - Pedal It Store"
          component={HomeScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Products - Total Items: 4"
          component={CategoriesScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Product Description"
          component={ProductsScreen}
        ></Stack.Screen>

        <Stack.Screen name="Your Cart" component={CartScreen}></Stack.Screen>

        <Stack.Screen name="Payment Summary" component={PaymentScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
