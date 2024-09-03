import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, FlatList } from "react-native";

import RecipeData from '../contents/data_recipes.json';
import ItemRecipe from "../../components/ItemRecipe";

const RecipeList = () => {
    return (
        <View style={styles.container}>
            <View>
                    <FlatList 
                        data={RecipeData.recipes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (<ItemRecipe item={item}/>)}
                    >
                    </FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f2f8',
    },
    boxshadow: {
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    card: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 500,
        marginVertical: 1,
    },
});

export default RecipeList;