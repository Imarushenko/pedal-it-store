// imports
import React from "react";
import { FlatList, Text } from "react-native";
import { PRODUCTS } from "../data/Dummy-Data";
import ProductComponent from "../components/ProductsComponent";
import styles from "../assets/Styles";
import { ScrollView } from "react-native-web";

export default function CategoriesScreen({ route, navigation }) {
  const category_id = route.params.category_id;
  const displayProductsPerCategory = PRODUCTS.filter(
    (item) => item.categoryId == category_id
  );
  const symbol = "®";
  const renderProductItem = ({ item }) => {
    return (
      <ProductComponent
        title={item.product_title}
        price={item.price}
        onSelectProduct={() => {
          navigation.navigate("Product Description", {
            product_id: item.id,
            product_name: item.product_name,
          });
        }}
        image={item.productImage}
      ></ProductComponent>
    );
  };

  return (
    <ScrollView style={styles.generalView}>
      <Text style={styles.headerTitle}>PRODUCTS</Text>
      <FlatList
        data={displayProductsPerCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
      ></FlatList>
      <Text style={styles.footer}>
        pedal it store
        <Text style={[styles.footer, { fontSize: 35 }]}>{" " + symbol}</Text>
      </Text>
    </ScrollView>
  );
}
