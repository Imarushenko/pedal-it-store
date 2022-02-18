import React from "react";

import AppLoading from "expo-app-loading";
import { useFonts, Audiowide_400Regular } from "@expo-google-fonts/audiowide";
import Navigations from "./navigations/Navigations";

export default () => {
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigations></Navigations>;
  }
};
