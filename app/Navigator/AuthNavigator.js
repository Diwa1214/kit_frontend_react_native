import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import LoginScreen from "../screens/Login"
import SignUp from "../screens/SignUp"
import React from "react"
import color from "../screens/color/color"
 const Stack  = createNativeStackNavigator()


const AuthStackNavigator = ()=>{
 
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerStyle:{
                backgroundColor:color.primary
            },headerTintColor:"white"}} ></Stack.Screen>
            <Stack.Screen name="SignIn" component={LoginScreen}  options={{headerStyle:{
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
