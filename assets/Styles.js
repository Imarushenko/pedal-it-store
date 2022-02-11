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

  productGridItem: {
    backgroundColor: "#FDFEFE",
    flex: 1,
    width: "250px",
    margin: 25,
    height: "250px",
  },

  container: {
    flex: 1,
    borderRadius: 0,
    shadowColor: "#CD6155",
    shadowOpacity: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
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

  productTitle: {
    fontSize: 20,
    textAlign: "auto",
    position: "absolute",
    padding: "10px",
    top: "1px",
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    margin: "10px",
    color: "#2E4053",
  },

  productPriceTitle: {
    fontSize: 20,
    position: "relative",
    padding: "10px",
    color: "black",
    textAlign: "right",
    fontWeight: "bold",
    margin: "100px",
    color: "#1ABC9C",
  },
});
