import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import LanguageHome from "./screens/LanguageHome"
import Sentences from "./screens/Sentences"
import Test from "./screens/Test"
import MatchingWords from "./screens/MatchingWords"




const Stack = createStackNavigator()


export default function App() {

  return (
    
    <NavigationContainer >

      <Stack.Navigator initialRouteName='Language Home'>
      <Stack.Screen name="Language Home" component={LanguageHome} options={{ headerShown: false }}  />
      <Stack.Screen name="Sentences" component={Sentences} options={{ headerShown: false }}  />
      <Stack.Screen name="Test" component={Test} options={{ headerShown: false }}  />
      <Stack.Screen name="Matching Words" component={MatchingWords} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
