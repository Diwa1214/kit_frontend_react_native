import { NavigationContainer } from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AccountScreenNavigator } from "./ScreenNavigator"
import AcademicScreen from "../screens/WelcomeStack/AcademicScreen"
import NewsScreen from "../screens/WelcomeStack/NewsScreen"
import PlacementScreen from "../screens/WelcomeStack/PlacementScreen"
import ResultScreen from "../screens/WelcomeStack/ResultScreen"
import StudentLogin from "../screens/WelcomeStack/StudentLogin"
import WelcomeScreen from "../screens/WelcomeStack/welcomeScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import color from "../screens/color/color"
import { TabNavigator } from "./TabNavigator"
import ResultComponent from "../screens/WelcomeStack/component/ResultComponent"

const Stack = createNativeStackNavigator()

const tab = createBottomTabNavigator()

  
 const HomeScreenNavigator = ()=>{
   return(
  <Stack.Navigator>
      <Stack.Screen name="home" component={TabNavigator} 
      options={{headerShown:false,headerStyle:{backgroundColor:color.primary},headerTintColor:"white"}}/>

      <Stack.Screen name="Academic" component={AcademicScreen} options={{headerShown:true}} 
       options={{headerShown:true,headerStyle:{backgroundColor:color.primary},headerTintColor:"white"}} />

      <Stack.Screen name="Result" component={ResultComponent} options={{headerShown:true,mode:"card"}}
       options={{headerShown:true,headerStyle:{backgroundColor:color.primary},headerTintColor:"white"}}/>

      <Stack.Screen name="Placement" component={PlacementScreen} options={{headerShown:true}}
       options={{headerShown:true,headerStyle:{backgroundColor:color.primary},headerTintColor:"white"}}/>
       
      <Stack.Screen name="News" component={NewsScreen} options={{headerShown:true}}
       options={{headerShown:true,headerStyle:{backgroundColor:color.primary},headerTintColor:"white"}}/>
       
      <Stack.Screen name="StudentLogin" component={StudentLogin} options={{headerShown:true}}
       options={{headerShown:true,headerStyle:{backgroundColor:color.primary},headerTintColor:"white"}}/>
   </Stack.Navigator>
   )
}

export default AppNavigator = () =>{
    return (
        <NavigationContainer>
          <HomeScreenNavigator/>
        </NavigationContainer>
    )
   
}
