import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import SignUp from "../screens/SignUp"
import React from "react"
import color from "../screens/color/color"
import SignUpScreen from "../screens/SignUpScreen"
import LoginScreen from "../screens/loginScreen"
 const Stack  = createNativeStackNavigator()


const AuthStackNavigator = ()=>{
 
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerStyle:{
                backgroundColor:color.primary
            },headerTintColor:"white" ,headerShown:false}} ></Stack.Screen>
            <Stack.Screen name="login" component={LoginScreen}  options={{headerStyle:{
                backgroundColor:color.primary
            },headerTintColor:"white",headerTitle:"Login"}}></Stack.Screen>
        </Stack.Navigator>
    )

}

export const AuthNavigator = () =>{
    return (
      <NavigationContainer>
          <AuthStackNavigator/>
      </NavigationContainer>
    )
}
