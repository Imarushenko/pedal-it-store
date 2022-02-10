import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Audiowide_400Regular } from "@expo-google-fonts/audiowide";

export default () => {
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "Audiowide_400Regular",
          }}
        >
          Audiowide Regular (Test)
        </Text>
      </View>
    );
  }
};
