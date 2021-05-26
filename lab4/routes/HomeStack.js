import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


function ActionBarIcon() {
  return (
    <Image
    source={{uri : 'https://cdn130.picsart.com/286203394073211.png'}}
    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }} />
  );
}

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
      
        <Stack.Navigator>
          <Stack.Screen name="≡ Home" component={Home} 
          options={{ headerTitle: 'Home', 
            headerLeft : props => <ActionBarIcon {...props} /> }}  />

          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    
    );
} 


export default HomeStack;