// imports
import React from "react";
import { View, FlatList } from "react-native";
import { PRODUCTS } from "../data/Dummy-Data";
import ProductsItem from "../components/ProductsGridTile";
import styles from "../assets/Styles";

export default function CategoriesScreen({ route, navigation }) {

  const catId = route.params.catId;
  const displayProductsPerCategory = PRODUCTS.filter(item => item.categoryId == catId)

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
      <FlatList
        data={displayProductsPerCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
      ></FlatList>
  );
}
