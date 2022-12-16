import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { unit26,itemColor,itemColorDark ,backgroundColor,wordList} from '../languageConstants';

const QuestionItem = ({item,handleTrueAnswer,handleWrongAnswer}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [showMeaning,setShowMeaning] = useState(false)
    const [answeredCorrectly,setAnsweredCorrectly] = useState("")

    const handleAnswer = (ans)=>{
        // true answer
        if(ans)
        {
            setAnsweredCorrectly("true")
            handleTrueAnswer()
        }
        // wrong answer
        else
        {
            setAnsweredCorrectly("false")
            handleWrongAnswer()
        }
            
    }

    const getMeaning = ()=>{

        return(
            <View style={{  }}>
                <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.meaning}</Text>
            </View>
        )

    }


  return (
    <View style={{ marginTop:20,marginBottom:10, borderBottomWidth:2,borderColor:itemColorDark }}>
      <TouchableOpacity style={{ height:height/10,backgroundColor:(answeredCorrectly==""?itemColor:answeredCorrectly=="true"?"green":"red"), margin:15, marginBottom:10, marginTop:10, borderRadius:9,
        alignItems:"center",justifyContent:"center", borderColor:itemColorDark, borderWidth:2 }} onPress={()=>setShowMeaning(!showMeaning)}>

                <View>   
                <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.question}</Text>
                </View>
                {showMeaning?getMeaning():<View/>}
      </TouchableOpacity>

        

        <View style={{ flexDirection:"row"}}>
            <TouchableOpacity style={{ height:height/15,backgroundColor:itemColor,borderColor:itemColorDark, borderWidth:2,flex:1,margin:10,borderRadius:9,
            alignItems:"center",justifyContent:"center"  }} onPress={()=>handleAnswer(item.answers[0][1])}>
                <View>   
                <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.answers[0][0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:height/15,backgroundColor:itemColor,borderColor:itemColorDark, borderWidth:2,flex:1,margin:10,borderRadius:9,
            alignItems:"center",justifyContent:"center"  }} onPress={()=>handleAnswer(item.answers[1][1])}>
                <View>   
                <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.answers[1][0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:height/15,backgroundColor:itemColor,borderColor:itemColorDark, borderWidth:2,flex:1,margin:10,borderRadius:9,
            alignItems:"center",justifyContent:"center"  }} onPress={()=>handleAnswer(item.answers[2][1])}>
                <View>   
                <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.answers[2][0]}</Text>
                </View>
            </TouchableOpacity>
        </View>


    </View>
  )
}

export default QuestionItem