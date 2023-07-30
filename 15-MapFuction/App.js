import {StyleSheet,Text,View,ScrollView} from 'react-native'
import React from 'react'

export default function App(){

  const user= [
    {
      id:1,
      name:"saleem"
    },
    {
      id:2,
      name:"azeem"
    },
    {
      id:3,
      name:"saddam"
    },
    {
      id:4,
      name:"nadeem"
    },
    {
      id:5,
      name:"owaise"
    },
    {
      id:6,
      name:"afroz"
    },
    {
      id:7,
      name:"jubair"
    },
    {
      id:8,
      name:"jubaish"
    },
    {
      id:9,
      name:"arman"
    },
    {
      id:10,
      name:"asif"
    },
    {
      id:11,
      name:"sarfaraz"
    },
    {
      id:12,
      name:"parvez"
    },{
      id:13,
      name:"irshad"
    },
    {
      id:14,
      name:"shakeel"
    },
    {
      id:15,
      name:"ayaan"
    },

  ]
  return(
    <View style={{marginTop:70}}>
      
      <Text style={{fontSize:30}}> List With Map Function</Text>
      <ScrollView style={{marginBottom:40}}>
      {
        user.map((item)=><Text style={styles.container}>{item.name}</Text>)
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:30,
    backgroundColor:'black',
    color:'#fff',
    marginBottom:5,
    borderWidth:10
    
  },
});
