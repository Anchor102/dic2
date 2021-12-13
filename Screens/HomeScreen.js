import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Touchable } from 'react-native';
import * as Speech from 'expo-speech';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends React.Component{

  constructor(){
    super()
    this.state = { 
      word: '', 
      definition: '', 
      text:'', 
    }
  }

  getWord = async (word) =>{
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    const data = await fetch(url)
    const response = await data.json()
    var word_1 = response[0].word
    var definition = response[0].meanings[0].definitions[0].definition
    
    this.setState({
      word: word_1.trim(),
      definition: definition.trim()
    })
  }

  render(){
    return (
      <View style={styles.container}> 
      <Image style = {styles.dictionaryImage}
          source={require("../assets/bg.png")}/>
        <View style = {styles.boxContainer}> 
          <TextInput 
            placeholder = "Enter The Word Here" 
            onChangeText ={(text)=>{ this.setState({text: text, }) }} 
            style = {styles.inputBox} 
          />  
          <TouchableOpacity 
          style = {styles.button} 
          onPress  = {()=>{this.getWord(this.state.text)}} >
            <Text style = {styles.searchText}> Search </Text>
          </TouchableOpacity>
        </View>
        <Text>{this.state.definition}</Text>

        <View style = {styles.iconContainer}>
        <TouchableOpacity
          onPress = {()=>{ Speech.speak(this.state.definition) }} 
        > 
        <Ionicons 
          name={this.state.speakerIcon} 
          size={RFValue(30)} 
          color= "black"
          style={{ margin: RFValue(15) }} 
        />
        </TouchableOpacity>
        </View>
        

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
    width: "120%",
    height: 40,
    borderWidth: 5,
    color:"black",
    borderColor: "#3373BA",
    marginTop: 10
    
  },
  button: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10

  }, 
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
   searchText: {
     fontSize: 12,
     fontWeight: "bold"
   },
   dictionaryImage: {
     width: 200,
     height: 200,
     marginTop: 20,
   },
   iconContainer:{
     flex: 0.2,
    
   }
});
