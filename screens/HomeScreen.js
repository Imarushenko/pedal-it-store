// imports
import React from "react";
import { CATEGORIES } from "../data/Dummy-Data";
import CategoryComponent from "../components/CategoriesComponent";
import { FlatList, Text } from "react-native";
import styles from "../assets/Styles";
import { ScrollView } from "react-native-web";

const HomeScreen = ({ navigation }) => {
  const symbol = "®";
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
    <ScrollView style={styles.generalView}>
      <Text style={styles.headerTitle}>CATEGORIES</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      ></FlatList>
      <Text style={styles.footer}>
        pedal it store
        <Text style={[styles.footer, { fontSize: 35 }]}>{" " + symbol}</Text>
      </Text>
    </ScrollView>
  );
};

export default HomeScreen;
