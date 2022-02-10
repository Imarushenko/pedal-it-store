// imports
import React from "react";
import { View, FlatList } from "react-native";
import { CATEGORIES, PRODUCTS } from "../data/Dummy-Data";
import ProductsItem from "../components/ProductsItem";
import styles from "../assets/Styles";

export default function ProductsScreen({ route, navigation }) {
  const { productId } = route.params;
  const displayedProducts = PRODUCTS.filter(
    (product) => product.category_id.indexOf(productId) >= 0
  );

  const renderProductItem = ({ item }) => {
    return (
      <ProductsItem
        title={item.product_title}
        price={item.price}
        onSelectProduct={() => {
          navigation.navigate("Products", {
            procId: item.product_id,
            procName: item.product_title,
          });
        }}
        image={item.productImage}
      ></ProductsItem>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.category_id}
        renderItem={renderProductItem}
        style={{ width: "100" }}
      ></FlatList>
    </View>
  );
}
