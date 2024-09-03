import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import MainTab from './src/screens/Screen_MainTab';

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={
                headerStyle={ backgroundColor: '#f9f9f9', }
            }
        >
            <Stack.Screen name="Biarkan Dia Memasak App" component={MainTab} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    );
}