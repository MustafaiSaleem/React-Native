import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const ball = (val) => {
    console.warn(val)
  }

  const [name, setname] = useState("")
  return (
    <View>
      <Text style={{ fontSize: 40 }}> Handle Text Input !</Text>
      <Text style={{ fontSize: 30 }}> Your Name is: {name} </Text>
      <TextInput style={styles.container} placeholder='Enter Your Name'
        onChangeText={(text) => setname(text)} value={name} />
      <Button title='Next' onPress={() => ball("Name is Updated")} color={'green'} />
      <Button title='Clear Data' onPress={() => setname('')} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    fontSize: 26,
    textAlignVertical: 'bottom',
    borderWidth: 5,
    borderColor: 'black',
    margin: 10
  },
});
