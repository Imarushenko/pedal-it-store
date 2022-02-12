// imports
import React from "react";
import { CATEGORIES } from "../data/Dummy-Data";
import CategoryGridTile from "../components/CategoriesGridTile";
import { FlatList } from "react-native";

const HomeScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.categoryName}
        onSelect={() => {
          navigation.navigate("Products - Total Items: 4", {
            category_id: item.id,
            category_name: item.categoryName,
          });
        }}
        image={item.categoryImage}
      ></CategoryGridTile>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    ></FlatList>
  );
};

export default HomeScreen;
