import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { unit26,itemColor,itemColorDark ,backgroundColor} from '../languageConstants';

const MatchingMeaningItem = ({item,setMeaning}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <View style={{ flex:1 ,alignItems:"center", justifyContent:"center",margin:10}}>
        <TouchableOpacity style={{ height:height/14, width:width/3, marginLeft:10, backgroundColor:itemColor, borderRadius:8, alignItems:"center", justifyContent:"center"
        ,borderColor:itemColorDark,borderWidth:3 }} 
      onPress={()=>setMeaning(item.word,item.meaning)}>

      <View>
        <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.meaning}</Text>
      </View>
        
      </TouchableOpacity>
    </View>
      
  )
}

export default MatchingMeaningItem