import React from "react";
import { ScrollView, View } from "react-native-web";
import { PRODUCTS } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function ProductsScreen({ route }) {
  const product_id = route.params.product_id;
  const current_product = PRODUCTS.find((item) => item.id == product_id);

  return (
      <View style={styles.container}>
          <ScrollView>
              <Image source={{uri: current_product.productImage}} style={styles.image}>
                <Text style={styles.title}>{current_product.title}</Text>
                <Text style={styles.title}>{current_product.description_paragraph}</Text>
                <Text style={styles.title}>{current_product.size}</Text>
                <Text style={styles.title}>{current_product.shipping}</Text>
                <Text style={styles.title}>{current_product.shipping + current_product.price}</Text>
              </Image>
          </ScrollView>
      </View>
  )
}


//  TODO View between Image and contain Text