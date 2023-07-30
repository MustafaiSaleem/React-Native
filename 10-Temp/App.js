import {StyleSheet, Text,View} from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function App(){

  const [name,setname] = useState("")

  return (
    <View>
      <Text style={{fontSize:40}}>Handle Text Input ! </Text>
      <Text style={{fontSize:40}}>Your Name:{name} </Text>
      <TextInput style={styles.container} placeholder='  Enter Your Name' 
      onChangeText={(text)=>setname(text)} value={name}
      />
      <Button title ='Clear Data' onPress={()=>setname('')}/> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    fontSize:26,
    textAlignVertical:'bottom',
    borderWidth:5,
    borderColor:'black',
    margin:10
  },
});
