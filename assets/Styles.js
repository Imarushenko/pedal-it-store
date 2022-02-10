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
    margin: 20,
    height: 370,
  },

  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "#CD6155",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  container2: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  background_image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  title: {
    fontSize: 50,
    color: "#FDFEFE",
    textAlign: "center",
    fontWeight: "bold",
    position: "center",
  },
});
