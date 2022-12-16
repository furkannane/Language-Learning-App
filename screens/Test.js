import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { itemColor,itemColorDark ,backgroundColor,questions} from '../languageConstants';
import CategoryText from '../components/CategoryText';
import QuestionItem from '../components/QuestionItem';

const Test = () => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [score,setScore] = useState(0)
  const [qNo,setQNo] = useState(0)

  const handleTrueAnswer = ()=>{
    setScore(score+1)
  }

  const handleWrongAnswer = ()=>{
    setScore(score-1)
  }

  const handleNext = ()=>{
    if(qNo+3>=questions.length)
    return
    else setQNo(qNo+3)
  }

  return (
    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:30, marginBottom:10 }}  >

    <CategoryText color={itemColor} colorDark={itemColorDark} text="Answer The Questions" />

    <View style={{ alignItems:"center", justifyContent:"center",margin:15, flexDirection:"row" }}>
        <TouchableOpacity style={{ backgroundColor:itemColorDark, height:30,width:width/4,alignItems:"center", justifyContent:"center", margin:10, borderWidth:2,borderColor:"blue",borderRadius:10 }}
        onPress={handleNext} >
            <Text style={{ color:"white", fontWeight:"bold" }}>Next</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor:itemColorDark, height:30,width:width/4,alignItems:"center", justifyContent:"center", margin:10, borderWidth:2,borderColor:"blue",borderRadius:10}}>
            <Text style={{ color:"white", fontWeight:"bold" }}>Score: {score}</Text>
        </View>
    </View>

    {[questions[qNo],questions[qNo+1],questions[qNo+2]].map((item)=>
    <QuestionItem item={item} key={item.id} handleTrueAnswer={handleTrueAnswer} handleWrongAnswer={handleWrongAnswer} />)}

    </ScrollView>
  )
}

export default Test