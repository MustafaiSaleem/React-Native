import { StatusBar } from 'expo-status-bar'
import {StyleSheet,View,Text, Button} from 'react-native'
import MasterFile from './elements/poll'
export default function App(){

  const ball =(val)=>{

    console.warn(val)
  }
  return(
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Hello Sir!</Text>
      <Button title='For Login Press Here' onPress={()=>ball("Welcome To The App")} color={'green'} />
      <MasterFile/>
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
