import React from "react";
import { ScrollView, View } from "react-native-web";
import { PRODUCTS } from "../data/Dummy-Data";

export default function ProductsScreen({ route }) {
  const product_id = route.params.product_id;
  const curr_product = PRODUCTS.find((item) => item.id === product_id);

  return (
      <View>
          <ScrollView>
              
          </ScrollView>
      </View>
  )
}
