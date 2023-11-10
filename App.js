import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'gray',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStatusBarHeight: 40
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={{
            headerTitle: " ",
            headerTitleAlign: 'center',
            headerTintColor: "#222",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


