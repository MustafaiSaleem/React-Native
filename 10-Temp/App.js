import {Button,StyleSheet, Text,View } from 'react-native'



export default function App(){

  return(
    <View style={styles.container}>
      <Text style={{fontSize:30,backgroundColor:'black',padding:4,borderRadius:10,color:'#fff'}}> Hello World </Text>
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
