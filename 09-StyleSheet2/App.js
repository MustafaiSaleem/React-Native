import {Button,StyleSheet, Text,View } from 'react-native'
import React,{useState} from 'react'


export default function App(){

  const [name,setname] =useState("Mustafai")
  return(
    <View style={styles.container}>
      <Text style={{fontSize:30,backgroundColor:'black',padding:4,borderRadius:30,color:'#fff'}}> Hello World</Text>
      <Button title ='Update props' onPress={()=>setname("Saleem")}/>
      <Dual name={name}/>
    </View>
  );
}


const Dual =(team)=>{

  return (
    <View>
      <Text style={{fontSize:20}}>{team.name}</Text>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30
  },
});
