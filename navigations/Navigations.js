import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={/*screens*/}></Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}