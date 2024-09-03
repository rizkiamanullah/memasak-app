import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import RecipeData from "../contents/data_recipes.json";

const DetailRecipe = ({ route }) => {
    const itemId = route.params.recipeId;
    const data = RecipeData.recipes.find((val) => val.id == itemId);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    <Image source={{uri: data.image}} style={{width:360, height:360, borderRadius: 8,}}></Image>
                    <Text style={{fontSize: 24, marginVertical: 10, fontWeight: "bold"}}>{data.name}</Text>
                    <Text style={{color:"grey", marginBottom:6}}>⭐ {data.rating} ({data.reviewCount}) | 🌐 {data.cuisine}</Text>
                    <Text style={{color:"grey"}}>🎚️ {data.difficulty} | ⌛ {data.prepTimeMinutes} Minutes</Text>
                    <Text style={{fontSize:22, marginVertical: 10, fontWeight:"condensed", alignSelf:"flex-start"}}>Ingredients ✨</Text>
                    {
                        data.ingredients.map((val) => {
                            return (
                                <Text style={{alignSelf: "flex-start", marginVertical: 2}}>  ➡️ {val}</Text>
                            )
                        })
                    }
                    <Text style={{fontSize:22, marginVertical: 10, fontWeight:"condensed", alignSelf:"flex-start"}}>Instructions 🍳</Text>
                    {
                        data.instructions.map((val) => {
                            return (
                                <Text style={{alignSelf: "flex-start", marginVertical: 5}}>  ➡️ {val}</Text>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9eb',
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
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 420,
        marginVertical: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
});


export default DetailRecipe;