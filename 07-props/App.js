import { Button, StyleSheet,Text,View } from "react-native";
import React,{useState} from 'react'

export default function App(){
  const [name,setname] =useState("Saleem")
  return(

    <View style={styles.container}>
      <Text style={{fontSize:30}}>Hello Sir !</Text>
      <Button title='Update props'onPress={()=>setname("Mustafai")}/>
      <Duo name={name}/>
    </View>
  );
}

const Duo=(team)=>{
  
  return(
    <View style={{backgroundColor:'green',padding:5}}>
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
  },
});
