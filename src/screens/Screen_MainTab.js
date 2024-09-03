import React from "react";

import RecipeList from "./Screen_RecipeList";
import ScanRecipe from "./Screen_ScanRecipe";
import SavedRecipe from "./Screen_SavedRecipe";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Recipes" component={RecipeList} options={{
                tabBarLabel: "Recipes",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? "list-sharp" : 'list-outline'}
                        size={size}
                        color={color}>
                    </Ionicons>
                )
            }}>
            </Tab.Screen>
            <Tab.Screen name="Favorite" component={SavedRecipe} options={{
                tabBarLabel: "Favorite",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? 'heart-circle-sharp' : 'heart-circle-outline'}
                        size={size}
                        color={color}>
                    </Ionicons>
                )
            }}>
            </Tab.Screen>
            <Tab.Screen name="Scan QR" component={ScanRecipe} options={{
                tabBarLabel: "Scan QR",
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons
                        name={focused ? 'qr-code-sharp' : 'qr-code-outline'}
                        size={size}
                        color={color}>
                    </Ionicons>
                )
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default MainTab;