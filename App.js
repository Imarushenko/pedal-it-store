import AppLoading from "expo-app-loading";
import { useFonts, Audiowide_400Regular } from "@expo-google-fonts/audiowide";
import Navigations from "./navigations/Navigations";

export default () => {
  let [fontsLoaded] = useFonts({
    Audiowide_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

    return <Navigations></Navigations>
};
