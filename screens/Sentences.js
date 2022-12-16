import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { unit26,itemColor,itemColorDark ,backgroundColor} from '../languageConstants';
import SentenceItem from '../components/SentenceItem';
import CategoryText from '../components/CategoryText';

const Sentences = () => {
  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:30, marginBottom:10 }}  >

    <CategoryText color={itemColor} colorDark={itemColorDark} text="Sentences" />

    {unit26.map((item)=><SentenceItem key={item.id} item={item} />)}

    </ScrollView>
  )
}

export default Sentences