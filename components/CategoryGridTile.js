import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Styles";

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={styles.container}>
                <ImageBackground source={{uri: props.categoryImage}} style={styles.background_image}>
                    <Text style={styles.title}>
                        {props.categoryName}
                    </Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryGridTile;


