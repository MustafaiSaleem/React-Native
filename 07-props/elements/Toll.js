import { Button, StyleSheet,Text,View } from "react-native";
import React,{useState} from 'react'

export default function App(){
  const [name,setname] =useState("Saleem")
  function test(){
    setname("Mustafai")
  }
  return(

    <View style={styles.container}>
      <Text style={{fontSize:30}}>{name}</Text>
      <Button title='Update props'onPress={test}/>
      
    </View>
  );
}
