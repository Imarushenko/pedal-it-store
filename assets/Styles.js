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
    borderRadius: 0,
    backgroundColor: "white",
    shadowColor: "#CD6155",
    shadowOpacity: 3,
    shadowOffset: { width: 7, height: 6 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  containerOfProducts: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: "white",
    shadowColor: "#27AE60",
    shadowOpacity: 3,
    shadowOffset: { width: 7, height: 6 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
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

  // product details style
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
    // marginLeft: 2,
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
  },

  // cart style
  cartIcon: {
    fontSize: 30,
    color: "white",
  },

  cartTitleText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    // margin: 10,
    textAlign: "center",
  },

  cartView: {
    margin: 10,
    width: "90%",
    height: 320,
    marginLeft: 50,
  },

  textInput: {
    width: "95%",
    height: 50,
    borderWidth: 4,
    borderColor: "white",
    margin: 10,
    borderRadius: 5,
    alignContent: "center",
  },

  // button: {
  //   width: '30%',
  //   height: '10%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: "black"
  // },

  // text: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'white',
  // },

  touchableOpacityStyle: {
    backgroundColor: "#86E3AD",
    width: "30%",
    height: "10%",
    borderWidth: 2.5,
    borderColor: "#2980B9",
    borderRadius: 13,
  },

  generalView: {
    flex: 1,
    backgroundColor: "#A9DFBF",
    // alignItems: "center",
    // justifyContent: "center",
    // elevation: 15,
    height: "100%",
    width: "100%",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "black",
  },

});
