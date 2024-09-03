import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const DetailRecipe = ({item}) => {
    return (
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