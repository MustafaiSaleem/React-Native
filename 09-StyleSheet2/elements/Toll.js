import {Button, StyleSheet,Text,View} from 'react-native'
import React,{useState} from 'react'

export default function App(){

  const [name,setname] =useState("Mustafai")
  const [age,setage] =useState (15)

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}> Hello Sir !</Text>
      <Button title='For Next name' onPress={()=>setname("Saleem")} />
      <Button title='For Next Age' onPress={()=>setage(29)} />
      
      <Dia name={name} age={age}/>
    </View>
  );
}

const Dia =(props) =>{
  return(
    <View style={{backgroundColor:'green',padding:4}}>
      <Text style={{fontSize:20}}>name: {props.name}</Text>
      <Text style={{fontSize:20}}>age:  {props.age}</Text>
    </View>
  );
}
