import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import MainTab from './src/screens/Screen_MainTab';

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Biarkan Dia Memasak App" component={MainTab} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    );
}