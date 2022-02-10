// imports
import React from "react";
import { View, FlatList } from "react-native";
import { CATEGORIES, PRODUCTS } from "../data/Dummy-Data";
import ProductsItem from "../components/ProductsItem";
import styles from "../assets/Styles";

export default function ProductsScreen({ route, navigation }) {
  const { productId } = route.params;
  const displayedProducts = PRODUCTS.filter(
    (product) => product.categoryId.indexOf(productId) >= 0
  );

  const renderProductItem = ({ item }) => {
    return (
      <ProductsItem
        title={item.product_title}
        price={item.price}
        onSelectProduct={() => {
          navigation.navigate("Products", {
            procId: item.id,
            procName: item.title,
          });
        }}
        image={item.productImage}
      ></ProductsItem>
    );
  };

  return (
    <View style={styles.container2}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayedProducts}
        renderItem={renderProductItem}
        style={{ width: "100" }}
      ></FlatList>
    </View>
  );
}
