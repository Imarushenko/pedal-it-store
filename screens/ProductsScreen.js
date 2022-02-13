import React from "react";
import {  View, ScrollView, Image, Text } from "react-native";
import { PRODUCTS } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function ProductsScreen({route}) {

  const product_id = route.params.product_id;
  const current_product = PRODUCTS.find((item) => item.id === product_id);

  return (
      <View style={styles.productDetailsContainer}>
          <ScrollView>
            <View style={[styles.centerView, styles.container]}>
            <Image source={{uri: current_product.productImage}} style={styles.productImg}></Image>
            </View>
             <View style={styles.viewDivProductDetails}><Text style={styles.productDetailsText}>{"Product:       " + current_product.product_title}</Text></View>
             <View style={styles.viewDivProductDetailDesription}><Text style={styles.productDetailsText}>{current_product.description_paragraph}</Text></View>    
                <View style={[styles.viewDivProductDetails, {width: 200} ]}> <Text style={styles.productDetailsText}>{"Bike Size:      " + current_product.size}</Text></View>

              <View style={styles.viewDivProductDetails}><Text style={styles.productDetailsText}>{"Shipping Price:      "+current_product.shipping}</Text></View>
                
              
          </ScrollView>
      </View>
  )
}

// add view and new styles to every element (Text)
//  TODO View between Image and contain Text