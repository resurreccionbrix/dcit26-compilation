//Duales Angel
//Sierra, Mary Joy
//Resurreccion Brix
//BSCS 3-2

import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const[items, setItem] = useState([]);

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  }
  const addItemHandler = () => {
    setItem(currentItem => [...currentItem, enteredItem]);
    setEnteredItem(" ");
  }

  
  return (
    <View style = {styles.screen}>
      <View style = {styles.inputContainer}>
        <TextInput clearTextOnFocus = "True"
          placeholder = "Enter Item"
          placeholderTextColor = "white"
          style = {styles.input} 
          onChangeText = {itemInputHandler}
          value = {enteredItem}
        />
        <Button title = "Add" onPress = {addItemHandler}/>
    </View>
    <ScrollView>
      {items.map((item) => (
        <View key={item} style = {styles.itemList}>
          <Text> {item} </Text>
        </View>
      ))}
    </ScrollView>
  </View>
  
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 10,
    backgroundColor: '#264653',
    padding: 20,
    marginVertical: 30,
  },
  inputContainer: {
    backgroundColor: '#264653',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#367588',
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  itemList: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#2a9d8f',
    borderColor: 'black',
    borderWidth: 1,
  },
});