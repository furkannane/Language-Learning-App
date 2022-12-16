import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { unit26,itemColor,itemColorDark ,backgroundColor} from '../languageConstants';

const MatchingWordItem = ({item,setWord}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    
  return (
    <View style={{ flex:1 ,alignItems:"center", justifyContent:"center",margin:10}}>
        <TouchableOpacity style={{ height:height/14, width:width/3,marginRight:10, backgroundColor:itemColor, borderRadius:8, alignItems:"center", justifyContent:"center"
        ,borderColor:itemColorDark,borderWidth:3}}
       onPress={()=>setWord(item.word,item.meaning)}>

      <View>
        <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.word}</Text>
      </View>

      </TouchableOpacity>
    </View>
  )
}

export default MatchingWordItem