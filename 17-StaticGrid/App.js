import {StyleSheet,Text,View,ScrollView} from 'react-native'
import React from 'react'

export default function App(){
  
  return(
    <View style={{marginTop:50,backgroundColor:'black',height:800}}>
      <Text style={{fontSize:30,color:'#fff'}}> Grid with Dynamic Data</Text>
      <ScrollView>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',margin:15,marginBottom:20}}>
      <Text style={styles.container}>Patient Details</Text>
      <Text style={styles.container}>Hospital</Text>
      <Text style={styles.container}>Encounters</Text>
      <Text style={styles.container}>Radiology Reports</Text>
      <Text style={styles.container}>Infant Details</Text>
      <Text style={styles.container}>Deceased Patients</Text>
      <Text style={styles.container}>Slicer Dicer Reports</Text>
      <Text style={styles.container}>WorkBench Reports</Text>
      <Text style={styles.container}>MCP Templates</Text>
      <Text style={styles.container}>Epic</Text>
      <Text style={styles.container}>GSV Location</Text>
      <Text style={styles.container}>BRS Location</Text>
      <Text style={styles.container}>Inpatient Data</Text>
      <Text style={styles.container}>Outpatient Data</Text>
      <Text style={styles.container}>Reports</Text>
      <Text style={styles.container}>Readmission Encounters</Text>
      <Text style={styles.container}>Providers Details</Text>
      <Text style={styles.container}>Department</Text>
      <Text style={styles.container}>ICD-10 Codes</Text>
      <Text style={styles.container}>Diagnosis Codes</Text>
      <Text style={styles.container}>Advance illness</Text>
      <Text style={styles.container}>Equipments Codes</Text>
      <Text style={styles.container}>Procedure Codes</Text>
      <Text style={styles.container}>Events Reports</Text>
      </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:20,
    backgroundColor:'#fff',
    color:'black',
    margin:5,
    padding:5,
    width:100,
    height:100,
    textAlign:'center',
    textAlignVertical:'center'
  },
});
