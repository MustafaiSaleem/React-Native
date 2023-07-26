import React,{useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {

  const [name,setname]  = useState("")
  const [pass,setpass]  = useState("")
  const [email,setemail]  = useState("")
  const [display,setdis] =useState(false)

  const reset =()=>{
    setdis(false);
    setemail("");
    setname("");
    setpass("");

  }
  
  return (
    <View style={{marginTop:50,}}>
      <Text style={{fontSize:30}}> Simple Form in React Native </Text>
      <Text style={{fontSize:30}}> Your Name: {name}</Text>
      <TextInput style={styles.container}
       placeholder=' Enter Your Name'
       onChangeText={(text)=>setname(text)}
       value={name}
      />
       <TextInput style={styles.container}
       placeholder=' Enter Password'
       secureTextEntry={true}
       onChangeText={(text)=>setpass(text)}
       value={pass}
      />
       <TextInput style={styles.container}
       placeholder=' Enter Mail'
       onChangeText={(text)=>setemail(text)}
       value={email}
      />
      <View style={{marginBottom:10}}>
      <Button title='Print Details' onPress={()=>setdis(true)} />
      </View>
      <Button title='Clear Input' onPress={reset}/>
        {
          display ?
          <View>
            <Text style={{fontSize:15}}>User Name: {name}</Text>
            <Text style={{fontSize:15}}>User Password: {pass}</Text>
            <Text style={{fontSize:15}}>User Email: {email}</Text>
          </View>  
          :null

        }
      
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
