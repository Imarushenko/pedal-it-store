// app styles
// imports
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerOfProducts: {
    flex: 1,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 5,
    backgroundColor: "white",
    shadowColor: "#E74C3C",
    shadowOpacity: 3,
    shadowOffset: { width: 9, height: 8 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 5,
    backgroundColor: "white",
    shadowColor: "#8E44AD",
    shadowOpacity: 3,
    shadowOffset: { width: 9, height: 8 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    flex: 1,
    margin: 20,
    height: 370,
  },

  background_image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    color: "#FDFEFE",
    textAlign: "center",
    fontWeight: "bold",
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
    padding: "10px",
    color: "black",
    fontWeight: "bold",
    margin: "10px",
    color: "#1ABC9C",
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  productDetailsText: {
    fontSize: 20,
    margin: 3,
    marginLeft: 8,
    padding: 2,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    color: "#900C3F",
  },

  centerView: {
    justifyContent: "center",
    alignItems: "center",
  },

  productImg: {
    width: "40%",
    height: 220,
  },

  viewDivProductDetails: {
    backgroundColor: "white",
    borderWidth: 6,
    borderRadius: 7,
    margin: 10,
    padding: 2,
    borderColor: "black",
    height: 350,
    width: "96.5%",
    height: 200,
  },

  productDetailsContainer: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: "#900C3F",
    borderWidth: 4.5,
    borderColor: "black",
    borderRadius: 8,
    width: "100%",
  },

  cartIcon: {
    fontSize: 30,
    color: "white",
  },

  cartTitleText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  cartView: {
    width: "90%",
    height: "80%",
    marginLeft: 50,
  },

  textInput: {
    width: "50%",
    borderWidth: 4,
    borderColor: "black",
    marginLeft: "25%",
    borderRadius: 5,
    alignContent: "center",
  },

  button: {
    width: "30%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  headerTitle: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 40,
    fontWeight: "bold",
    color: "#0B5345",
  },

  touchableOpacityStyle: {
    backgroundColor: "#86E3AD",
    width: "30%",
    height: "17%",
    borderWidth: 2.5,
    borderColor: "#2980B9",
    borderRadius: 13,
  },

  generalView: {
    backgroundColor: "#AAB7B8",
    width: "100%",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "black",
  },

  finalTitle: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#212F3C",
  },

  totalPaymentView: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: "#0B5345",
    margin: 5,
    padding: 5,
  },

  footer: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    color: "#17202A",
  },
});
