import {Button, StyleSheet, Text ,View} from 'react-native'
import Toll from './elements/Toll'


export default function App(){
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Hello Sir !</Text>
      <Button title='Press Here For Login' color='red'/>
      <Toll/>
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
