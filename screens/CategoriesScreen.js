// imports
import React from "react";
import { CATEGORIES } from "../data/Dummy-Data";
import CategoryGridTile from "../components/CategoriesGridTile";
import { FlatList } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.categoryName}
        onSelect={() => {
          navigation.navigate("Categories", {
            catId: item.id,
            catName: item.categoryName,
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
      numColumns={3}
    ></FlatList>
  );
};

export default CategoriesScreen;
