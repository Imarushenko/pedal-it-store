// app styles
// imports
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  gridItem: {
    flex: 1,
    margin: 12,
    height: 125,
  },

  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "green",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  background_image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
