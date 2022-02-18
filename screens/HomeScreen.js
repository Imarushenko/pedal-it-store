// imports
import React from "react";
import { CATEGORIES } from "../data/Dummy-Data";
import CategoryComponent from "../components/CategoriesComponent";
import { FlatList } from "react-native";
import styles from "../assets/Styles";

const HomeScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryComponent
        title={item.categoryName}
        onSelect={() => {
          navigation.navigate("Products - Total Items: 6", {
            category_id: item.id,
            category_name: item.categoryName,
          });
        }}
        image={item.categoryImage}
      ></CategoryComponent>
    );
  };

  return (
    <FlatList
      style={styles.generalView}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    ></FlatList>
  );
};

export default HomeScreen;
