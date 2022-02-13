import React from "react";
import {  View, ScrollView, Image, Text } from "react-native";
import { PRODUCTS } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function ProductsScreen({route}) {

  const product_id = route.params.product_id;
  const current_product = PRODUCTS.find((item) => item.id === product_id);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.productPriceTitle}>
    //     sdfdsfdsfsdfdsfdsfdsfsdfsdf
    //   </Text>
    //   <Text style={styles.productPriceTitle}>
    //     sdfdsfdsfsdfdsfdsfdsfsdfsdf
    //   </Text>
    //   <Text style={styles.productPriceTitle}>
    //     sdfdsfdsfsdfdsfdsfdsfsdfsdf
    //   </Text>
    // </View>
    
      <View style={styles.container}>
          <ScrollView>
              {/* <Image source={{uri: current_product.productImage}} style={styles.image}> */}
                <Text style={styles.productPriceTitle}>{current_product.product_title}</Text>
                <Text style={styles.productPriceTitle}>{current_product.description_paragraph}</Text>
                <Text style={styles.productPriceTitle}>{current_product.size}</Text>
                <Text style={styles.tiproductPriceTitletle}>{current_product.shipping}</Text>
                <Text style={styles.productPriceTitle}>{current_product.shipping}</Text>
              {/* </Image> */}
          </ScrollView>
      </View>

// tests:

  //     <View style={styles.container}>
  //     <ScrollView>
  //         <Image source={{uri: current_product.productImage}} style={styles.image}>
  //           <Text style={styles.productPriceTitle}>1111111111</Text>
  //           <Text style={styles.productPriceTitle}>2222222222</Text>
  //           <Text style={styles.productPriceTitle}>3333333333</Text>
  //           <Text style={styles}>444444444</Text>
  //           {/* <Text style={styles.productPriceTitle}>{current_product.shipping}</Text> */}
  //         </Image>
  //     </ScrollView>
  // </View>
  )
}

// add view and new styles to every element (Text)
//  TODO View between Image and contain Text