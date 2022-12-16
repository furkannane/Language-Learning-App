import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { unit26,itemColor,itemColorDark ,backgroundColor} from '../languageConstants';
import CategoryText from '../components/CategoryText';

const LanguageHome = ({navigation}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:30, marginBottom:10}}>

    <CategoryText color={itemColor} colorDark={itemColorDark} text="Select The Exercise" />
      
      <TouchableOpacity style={{ flex:1, margin:20, backgroundColor:itemColor, borderColor:itemColorDark, borderRadius:5, height:height/10,
      alignItems:"center",justifyContent:"center",borderWidth:2 }}
      onPress={()=>navigation.navigate("Sentences")}>
      <Text style={{ fontWeight:"bold",fontSize:14 }}>Sentences</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex:1, margin:20, backgroundColor:itemColor, borderColor:itemColorDark, borderRadius:5, height:height/10,
      alignItems:"center",justifyContent:"center" ,borderWidth:2}}
      onPress={()=>navigation.navigate("Matching Words")}>
      <Text style={{ fontWeight:"bold",fontSize:14 }}>Match Words</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex:1, margin:20, backgroundColor:itemColor, borderColor:itemColorDark, borderRadius:5, height:height/10,
      alignItems:"center",justifyContent:"center",borderWidth:2 }}
      onPress={()=>navigation.navigate("Test")}>
      <Text style={{ fontWeight:"bold",fontSize:14 }}>Multiple Choice</Text>
      </TouchableOpacity>


    </ScrollView>

  )
}

export default LanguageHome