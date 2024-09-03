import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import ItemRecipe from "../../components/ItemRecipe";
import RecipeData from "../contents/data_recipes.json";

const SavedRecipe = () => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList 
                    // key={idx}
                    data={RecipeData.recipes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        if (item.id % 7 == 0)
                            return (<ItemRecipe item={item}/>)
                    }}
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
    card: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 380,
        padding: 10,
        borderRadius: 8,
        marginVertical: 6,
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
});

export default SavedRecipe;