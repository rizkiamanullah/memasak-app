import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import MainTab from './src/screens/Screen_MainTab';
import DetailRecipe from './src/screens/Screen_DetailRecipe';

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Biarkan Dia Memasak App" component={MainTab} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Detail Recipe" component={DetailRecipe} options={{headerShown: true}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    );
}