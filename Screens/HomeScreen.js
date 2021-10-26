import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Touchable } from 'react-native';

export default class HomeScreen extends React.Component{

  constructor(){
    super()
    this.state = {
      word1: "",
      text1: "",
      definition: ""
    }
  }

  getWord = async (text1) =>{
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + text1
    return fetch(url).then((data)=>{return data.json})
    .then((response)=>{var text1 = response[0].text1;
    var definition = response[0].meanings[0].definitions[0].definition
    this.setState({
      text1: text1.trim(),
      definition: definition.trim()
    })
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View style = {styles.boxContainer}>
          <TextInput placeholder = "Enter The Word Here" onChangeText ={(input)=>{
            this.setState({word1: input})
          }}  
          style = {styles.inputBox}
          />
          <TouchableOpacity 
          style = {styles.button} 
          onPress  = {()=>{this.setState({text1: this.state.word1})
          this.getWord(this.state.text1)}} >
            <Text style = {styles.searchText}> Search </Text>
          </TouchableOpacity>
        </View>
        <Text>{this.state.text1}</Text>
        <Text>{this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputBox: {
    textAlign: 'center',
    alignSelf: 'center',
    width: "80%",
    height: 40,
    borderWidth: 5,
    
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10

  }, 
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row"
  },
   searchText: {
     fontSize: 12,
     fontWeight: "bold"
   }
});
