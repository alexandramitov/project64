import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {


  return (
    <View style={styles.container}>

      <TextInput
        style={styles.inputButton}
        onChangeText={text=>{
          this.setState=({
            text: text,
            isSearchPressed: false,
            word: "Loading...",
            lexicalCategory: '',
            example:[],
            definition: "",
          });
        }}
        value={this.setState.text}
      />

      <TouchableOpacity
      style={styles.searchButton}
      onPres={ () => {
        this.setState({ isSearchPressed: true });
        this.getWord(this.state.text)
      }}
      >

      </TouchableOpacity>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    
  }
});
