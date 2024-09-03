import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";

const ItemRecipe = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={{uri: item.image}} style={{width: 100, height: 100, marginHorizontal: 10, borderRadius: 8,}}></Image>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: "bold", marginBottom: 6}}>{item.name}</Text>
                        <Text style={{color:"grey", marginBottom:6}}>⭐ {item.rating} ({item.reviewCount}) | 🌐 {item.cuisine}</Text>
                        <Text style={{color:"grey"}}>🎚️ {item.difficulty} | ⌛ {item.prepTimeMinutes} Minutes</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
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
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 410,
        marginVertical: 0.5,
        paddingHorizontal: 8,
        paddingVertical: 20
    },
});


export default ItemRecipe;