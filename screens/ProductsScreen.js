import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { PRODUCTS, CART } from "../data/Dummy-Data";
import styles from "../assets/Styles";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default function ProductsScreen({ route, navigation }) {
  const product_id = route.params.product_id;
  const current_product = PRODUCTS.find((item) => item.id === product_id);
  let totalPtrice = current_product.price + current_product.shipping;

  return (
    <View style={[styles.productDetailsContainer, { width: "100%" }]}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: current_product.productImage }}
            style={styles.productImg}
          ></Image>
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
            {current_product.product_title}
          </Text>
        </View>
        <Text
          style={[styles.productDetailsText, { color: "white", marginTop: 5 }]}
        >
          Product's Description:
        </Text>
        <View style={[styles.viewDivProductDetails]}>
          <Text style={styles.productDetailsText}>
            {current_product.description_paragraph}
          </Text>
        </View>
        <Text
          style={[
            styles.productDetailsText,
            { color: "white", textAlign: "left", marginTop: 5 },
          ]}
        >
          Product's Size:
        </Text>
        <View
          style={[styles.viewDivProductDetails, { width: 125, height: 60 }]}
        >
          <Text style={styles.productDetailsText}>
            {"Size: " + current_product.size}
          </Text>
        </View>
        <Text
          style={[
            styles.productDetailsText,
            { color: "white", textAlign: "left", marginTop: 5 },
          ]}
        >
          Product's Shipping Price:
        </Text>
        <View
          style={[styles.viewDivProductDetails, { width: 250, height: 60 }]}
        >
          <Text style={styles.productDetailsText}>
            {"Shipping Price: " + current_product.shipping + "$"}
          </Text>
        </View>
        <Text
          style={[
            styles.productDetailsText,
            { color: "white", textAlign: "left", marginTop: 5 },
          ]}
        >
          Product's Total Cost:
        </Text>
        <View
          style={[styles.viewDivProductDetails, { width: 225, height: 60 }]}
        >
          <Text style={styles.productDetailsText}>
            {"Total Price: " + totalPtrice + "$"}
          </Text>
        </View>

        <Text
          style={[
            styles.productDetailsText,
            { color: "white", textAlign: "left", marginTop: 5 },
          ]}
        >
          Product's Review:
        </Text>
        <View>
          <Text
            style={[
              {
                fontSize: 45,
                fontWeight: "bold",
                marginLeft: 10,
                color: "white",
              },
            ]}
          >
            <Icon name="star" size={40} color="white"></Icon>
            {" " + current_product.review}
          </Text>
        </View>

        <View style={styles.centerView}>
          <TouchableOpacity
            onPress={() => {
              CART.push(current_product);
            }}
          >
            <Text
              style={[
                styles.centerView,
                { color: "white", fontWeight: "bold", fontSize: 25, textAlign: "center" },
              ]}
            >
              Add To Cart
            </Text>
            <Icon name="cart" size={55} color="white" style={{textAlign: "center"}}></Icon>
          </TouchableOpacity>
        </View>

        <View style={[styles.centerView, { margin: 17 }]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Your Cart");
            }}
          >
            <Text
              style={[
                styles.centerView,
                {
                  color: "white",
                  fontWeight: "bold",
                  margin: 15,
                  fontSize: 20,
                },
              ]}
            >
              Go To The Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
