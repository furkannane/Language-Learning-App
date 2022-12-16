import * as React from 'react';
import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import { Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import { itemColor,itemColorDark } from '../languageConstants';

const SentenceItem = ({item}) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync({uri:item.sound});
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

   
  return (
        <TouchableOpacity style={{ height:height/10,backgroundColor:itemColor, margin:15, marginBottom:10, marginTop:10, borderRadius:9,
        alignItems:"center", flexDirection:"row", borderColor:itemColorDark, borderWidth:2}} onPress={playSound}>

            <View style={{ marginLeft:10 }}>

                <View style={{ flexDirection:"row",alignItems:"center" }}>
                <View style={{ marginRight:5 }}>
                <View style={{ height:20, width:3, backgroundColor:itemColorDark }} />
                </View>   
                <Text style={{ fontWeight:"bold",fontSize:14 }}>{item.sentence}</Text>
                </View>

                <View style={{ flexDirection:"row",alignItems:"center",marginTop:5}}>
                <View style={{ marginRight:5 }}>
                <View style={{ height:20, width:3, backgroundColor:itemColorDark}} />
                </View>             
                <Text style={{ fontWeight:"bold",fontSize:12 }}>{item.meaning}</Text>
                </View>
            
            </View>
            
        </TouchableOpacity>
    
  )
}

export default SentenceItem