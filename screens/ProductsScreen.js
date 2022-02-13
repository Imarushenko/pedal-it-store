import React from "react";
import {  View, ScrollView, Image, Text } from "react-native";
import { PRODUCTS } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function ProductsScreen({route}) {

  const product_id = route.params.product_id;
  const current_product = PRODUCTS.find((item) => item.id === product_id);

  return (
      <View style={styles.container}>
          <ScrollView>
            <View style={styles.centerView}>
            <Image source={{uri: current_product.productImage}} style={styles.productImg}></Image>
            </View>
             
                <Text style={styles.productPriceTitle}>{current_product.product_title}</Text>
                <Text style={styles.productPriceTitle}>{current_product.description_paragraph}</Text>
                <Text style={styles.productPriceTitle}>{current_product.size}</Text>
                <Text style={styles.tiproductPriceTitletle}>{current_product.shipping}</Text>
                <Text style={styles.productPriceTitle}>{current_product.shipping}</Text>
              
          </ScrollView>
      </View>
  )
}

// add view and new styles to every element (Text)
//  TODO View between Image and contain Text