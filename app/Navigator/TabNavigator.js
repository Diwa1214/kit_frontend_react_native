import color from "../screens/color/color"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import WelcomeScreen from "../screens/WelcomeStack/welcomeScreen"
import React from "react"
import { AccountScreenNavigator, AdminStackNavigator } from "./ScreenNavigator"
import { AuthContext } from "../screens/Context/AuthContext"

const tab = createBottomTabNavigator()

export const TabNavigator =()=>{
   const {user} = React.useContext(AuthContext)
   console.log(user,"user")

    return (
       <tab.Navigator 
       screenOptions={{ 
          tabBarActiveTintColor:"#48b4e0",
          tabBarLabelPosition:"beside-icon",
          tabBarHideOnKeyboard:true,
          
           }}
       >
           <tab.Screen name="Home" component={WelcomeScreen} options={{
            tabBarIcon:({size,color})=>{
               return <MaterialCommunityIcons name="home" size={size} color={color}/>
            },
            headerPressColor:"blue",
            headerShown:true,
            headerStyle:{
               backgroundColor:color.primary
            },
            headerTintColor:"white"
           }} />
           {user?.staff ?<tab.Screen name="Admin" component={AdminStackNavigator} options={{
            tabBarIcon:({size,color})=>{
               return <MaterialCommunityIcons name="home" size={size} color={color}/>
            },
            headerPressColor:"blue",
            headerShown:false,
           }} /> :null}
  
           {/*<tab.Screen name="Home" component={HomeNavigator}  options={({navigation})=>({
               
                  tabBarButton:()=>{
                       return <HomeButton onPress={()=>{
                          return  navigation.navigate("feedback")
                       }}/>
                  },
                 
           })}  />*/}
  
           <tab.Screen name="Profile" component={AccountScreenNavigator} options={{
            tabBarIcon:({size,color})=>{
               return <MaterialCommunityIcons name="account" size={size} color={color}/>
            },
            headerShown:true,
            headerStyle:{
               backgroundColor:color.primary
            },
            headerTintColor:"white"
           }}  />
       </tab.Navigator>
    )
  }