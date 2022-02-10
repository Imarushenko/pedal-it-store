import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
        ></Stack.Screen>

        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ route }) => ({ title: route.params.procName })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
