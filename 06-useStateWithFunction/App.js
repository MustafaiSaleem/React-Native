import {Button, StyleSheet,Text,View} from 'react-native'
import Temp from './elements/Toll'

export default function App (){

  const bet =(val)=>{
    console.warn(val)
  }
  return(
    <View style={styles.container}>
      <Text style={{fontSize:20}}> Hello Sir !</Text>
      <Button title='Press Here For Login' onPress={()=>bet("Welcome To The Enviorment")} />
      <Temp/>
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
