import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toll from './elements/Toll'

export default function App() {

  const [name, setname] = useState("Mustafai")


  return (
    <View style={styles.container}>
      <Text style={[Toll.container]} >Stylesheet</Text>

      <Text style={{ fontSize:15, backgroundColor: 'black', color: 'white', padding: 5, borderRadius: 20, borderWidth: 2, borderColor: 'white' }} > Hello Sir !</Text>


      <Button title='Update Props' onPress={() => setname("Saleem")} />
      <Die name={name} />
    </View>
  );
}

const Die = (team) => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: 'black', backgroundColor: '#fff' }}> {team.name} </Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    color: 'black'
  },
});
