/*
Members
Duales Angel A.
Sierra, Mary Joy
Resurreccion Brix
BSCS3-2
*/
import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return(
  <View style={{
      flex : 1,
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "gray",
  }}>
  <Text style={{color: "blue", fontSize: 30, fontFamily: "cursive", backgroundColor:"white"}}>
  Hello World!
  </Text>
    </View>
  );
}