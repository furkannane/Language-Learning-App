import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { unit26,itemColor,itemColorDark ,backgroundColor,wordList} from '../languageConstants';
import CategoryText from '../components/CategoryText';
import MatchingWordItem from '../components/MatchingWordItem';
import MatchingMeaningItem from '../components/MatchingMeaningItem';

const MatchingWords = () => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [word,setWord] = useState("")
    const [meaning,setMeaning] = useState("")
    const words = shuffleArray(wordList).slice(0,7)
    const meanings = shuffleArray(words)
    const [wordState,setWordState] = useState(words)
    const [meaningState,setMeaningState] = useState(meanings)
    const [score,setScore] = useState(0)

    const handleSetWord = (w,m)=>{
        if(meaning=="")
        setWord(w)
        // True
        else if(meaning==m){
            setWordState(wordState.filter((item)=>item.meaning != m))
            setMeaningState(meaningState.filter((item)=>item.meaning != m))
            setWord("")
            setMeaning("")
            setScore(score+1)
        }
        // False
        else{
            setWord("")
            setMeaning("")
            setScore(score-1)
        }
    }

    const handleSetMeaning = (w,m)=>{
        if(word=="")
        setMeaning(m)
        // True
        else if(word==w){
            setWordState(wordState.filter((item)=>item.meaning != m))
            setMeaningState(meaningState.filter((item)=>item.meaning != m))
            setWord("")
            setMeaning("")
            setScore(score+1)
        }
        // False
        else{
            setWord("")
            setMeaning("")
            setScore(score-1)
        }
    }

    const handleAgain = ()=>{
        setWordState(words)
        setMeaningState(meanings)
    }

    function shuffleArray(array_old) {
        const array = [...array_old]
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }


  return (

    <ScrollView style={{ backgroundColor:backgroundColor, marginTop:30, marginBottom:10 }}  >

    <CategoryText color={itemColor} colorDark={itemColorDark} text="Match The Words" />
    <View style={{ alignItems:"center", justifyContent:"center",margin:15, flexDirection:"row" }}>
        <TouchableOpacity style={{ backgroundColor:itemColorDark, height:30,width:width/4,alignItems:"center", justifyContent:"center", margin:10, borderWidth:2,borderColor:"blue",borderRadius:10 }}
        onPress={handleAgain} >
            <Text style={{ color:"white", fontWeight:"bold" }}>Again</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor:itemColorDark, height:30,width:width/4,alignItems:"center", justifyContent:"center", margin:10, borderWidth:2,borderColor:"blue",borderRadius:10}}>
            <Text style={{ color:"white", fontWeight:"bold" }}>Score: {score}</Text>
        </View>
    </View>
    
    
    <View style={{ flexDirection:"row" }}>
        <View style={{ flex:1,margin:10 }}>
        {wordState.map((item)=><MatchingWordItem key={item.id} item={item} setWord={handleSetWord} setMeaning={handleSetMeaning} />)}
        </View>
        <View style={{ flex:1,margin:10 }}>
        {meaningState.map((item)=><MatchingMeaningItem key={item.id} item={item} setWord={handleSetWord} setMeaning={handleSetMeaning} />)}
        </View>
    </View>

    
    
    </ScrollView>

  )
}

export default MatchingWords