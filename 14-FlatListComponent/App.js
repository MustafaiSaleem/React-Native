import React ,{useState} from 'react'
import {StyleSheet,Text,View,FlatList } from 'react-native'

export default function App(){
  const users = [
    {
      id:1,
      name:"saleem"
    },
    {
      id:2,
      name:"aqib"
    },
    {
      id:3,
      name:"owaise"
    },
    {
      id:4,
      name:"maddy"
    },
  ]
  return(
    <View style={{marginTop:50}}>
      <Text style={{fontSize:30}}>List with Flat List Component </Text>
      <FlatList 
       data={users} 
       renderItem={({item})=><Text style={{fontSize:15,backgroundColor:'black',color:'#fff',margin:3}}>{item.name}</Text>}
       keyExtractor={item=>item.id}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    textAlignVertical: 'bottom',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 15,
    
  },
});
