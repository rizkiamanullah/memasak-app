import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const ScanRecipe = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Scan</Text>
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
        width: 350,
        padding: 30,
        borderRadius: 15,
        marginVertical: 20,
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

export default ScanRecipe;