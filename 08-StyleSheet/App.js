import {Button, StyleSheet,Text,View} from 'react-native'
import React,{useState} from 'react'

export default function App(){

  const [name,setname] = useState("Confirmation")
  function test (){
    setname ("Registration Details Sent To Your Mail")
  }

  return(
    <View style={styles.container}>
      <Text style={{fontSize:50}}>Shopping Application</Text>
      <Text style={{fontSize:30 ,color:'#fff',backgroundColor:'black',borderRadius:10}}> Hello Sir ! </Text>
      <Button title='Press Here for Registration' onPress={test}/>
      <Text style={{fontSize:20,backgroundColor:'black',color:'#fff'}}>{name}</Text>
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
