import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const RecipeList = () => {
    return (
        <View style={styles.container}>
            <View>
                <ScrollView style={{padding: 10}}>
                    <View style={styles.card}>
                        <Text>Isinya Resep</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Isinya Resep</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Isinya Resep</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Isinya Resep</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Isinya Resep</Text>
                    </View>
                </ScrollView>
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
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 380,
        padding: 10,
        borderRadius: 4,
        marginVertical: 6,
    },
});

export default RecipeList;