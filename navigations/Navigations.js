import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home - Pedal It Store"
          component={HomeScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Products - Total Items: 4"
          component={CategoriesScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Product"
          component={ProductsScreen}
        ></Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
