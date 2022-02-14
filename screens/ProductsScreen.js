import React from "react";
import {  View, ScrollView, Image, Text } from "react-native";
import { PRODUCTS } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function ProductsScreen({route}) {

  const product_id = route.params.product_id;
  const current_product = PRODUCTS.find((item) => item.id === product_id);
  let totalPtrice = current_product.price + current_product.shipping;
  return (
      <View style={[styles.productDetailsContainer, {width: "100%"}]}>
          <ScrollView>
            <View style={[styles.container]}>
            <Image source={{uri: current_product.productImage}} style={styles.productImg}></Image>
            <Text style={{fontSize: 20, fontWeight: "bold", padding: 10}}>{current_product.product_title}</Text>
            </View>
            <Text style={[styles.productDetailsText, {color: "white", marginTop: 5} ]}>Product's Description:</Text>
             <View style={[styles.viewDivProductDetails, styles.centerView]}><Text style={styles.productDetailsText}>{current_product.description_paragraph}</Text></View>    
             <Text style={[styles.productDetailsText, {color: "white", textAlign: "left", marginTop: 5} ]}>Product's Size:</Text>
                <View style={[styles.viewDivProductDetails, {width: 160} ]}> <Text style={styles.productDetailsText}>{"Bike Size: " + current_product.size}</Text></View>
                <Text style={[styles.productDetailsText, {color: "white", textAlign: "left", marginTop: 5} ]}>Product's Shipping Price:</Text>
              <View style={[styles.viewDivProductDetails, {width: 250}]}><Text style={styles.productDetailsText}>{"Shipping Price: "+current_product.shipping + "$"}</Text></View>
              <Text style={[styles.productDetailsText, {color: "white", textAlign: "left", marginTop: 5} ]}>Product's Total Cost:</Text>
              <View style={[styles.viewDivProductDetails, {width: 225}]}><Text style={styles.productDetailsText}>{"Total Price: "+ totalPtrice + "$"}</Text></View>
                
            

            
              
          </ScrollView>
</View>

  )
}

// add view and new styles to every element (Text)
//  TODO View between Image and contain Text