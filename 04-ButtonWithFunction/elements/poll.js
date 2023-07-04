import { Text,View,StyleSheet, Button } from "react-native";

const MasterFile =()=>{

    const bet=(val)=>{
        console.warn(val)
    }
    return(
        <View style={StyleSheet.container}>
        <Text style={{fontSize:20}}>Forget Password</Text>    
        <Button title='For New Password Press Here' onPress={ ()=>bet("Password Sent To Your Email")} />

        </View>
    );
}

export default MasterFile;