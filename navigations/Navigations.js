import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
// import ProductsScreen from "../screens/CategoriesScreen";


const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home - Pedal It Store">
      <Stack.Screen name="Home - Pedal It Store" component={HomeScreen}></Stack.Screen>


        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
        ></Stack.Screen>

        {/* <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ route }) => ({ title: route.params.procName })}
        ></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
