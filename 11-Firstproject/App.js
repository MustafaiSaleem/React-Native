import {StatusBar} from 'expo-status-bar'
import {StyleSheet,View,Button,Text} from 'react-native'
import CollageData from './components/CollageData';

export default function App(){
  return (
    <View style={styles.container}>
      <Text styel={{fontSize:17}}>Hello Sir!</Text>
      <Text style={{fontSize:17}}>Please Login To The Enviorment</Text>
      <Button title='Press Here'></Button>
      <StatusBar style="auto" />
      <CollageData/>
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
