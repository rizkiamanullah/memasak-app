import { ImageBackground, StyleSheet, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Boxes = () => {
  return(
    <View style={styles.container}>
      <ImageBackground source={{uri:"https://img.freepik.com/premium-vector/80s-abstract-glowing-retrowave-neon-background_119686-17.jpg"}}>
        <View style={[{width:100, height:100, backgroundColor: '#0066b1'}, styles.boxshadow, styles.marginV]}>
        </View>
        <View style={[{width:100, height:100, backgroundColor: '#003d78'}, styles.boxshadow, styles.marginV]}>
        </View>
        <View style={[{width:100, height:100, backgroundColor: '#e22718'}, styles.boxshadow, styles.marginV]}>
        </View>
      </ImageBackground>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Halaman Utama" component={Boxes}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
  marginV: {
    marginVertical: 10,
  },
  marginH: {
    marginHorizontal: 10,
  },
});
