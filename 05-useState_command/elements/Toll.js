import React,{useState} from 'react'
import {Button, StyleSheet,Text,View} from 'react-native'

const Toll =()=>{

  const [data,data1] = useState("Forget Password")
  function test() {
    data1("Password Sent To Your Mail")
  }
  return(
    <View style={StyleSheet.container}>
      <Text style={{fontSize:20}}>{data}</Text>
      <Button title='Press Here For New Password' onPress={test} color={'black'} />

    </View>

  )
} 

export default Toll;