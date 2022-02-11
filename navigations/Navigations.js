import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/CategoryScreen";

const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={CategoriesScreen}></Stack.Screen>


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
