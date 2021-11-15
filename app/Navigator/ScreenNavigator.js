import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { View } from "react-native"
import color from "../screens/color/color"
import TextInputComponent from "../screens/Component/TextInput"
import FeedBack from "../screens/FeedBackScreen"
import AddResult from "../screens/StaffComponent/AddResult"
import StaffHome from "../screens/StaffComponent/StaffHome"
import StaffScreen from "../screens/StaffComponent/StaffScreen"

const Stack = createNativeStackNavigator()



 export const AccountScreenNavigator = ()=>{
    return(
   <Stack.Navigator>
       <Stack.Screen name="feedback" component={FeedBack} options={{headerShown:false}}/>
       
   </Stack.Navigator>
    )
 }

 export const AdminStackNavigator = ()=>{
     return(

        <Stack.Navigator screenOptions={{headerShown:true,headerStyle:{
            backgroundColor:color.primary
        },headerTintColor:"white",headerTitleStyle:{
            fontSize:18,
        }}}>
              <Stack.Screen name ="Admin" component={StaffHome} />
              <Stack.Screen name ="AddStudent" component={AddResult} />
              <Stack.Screen name ="StaffScreen" component={StaffScreen}   />
        </Stack.Navigator>
     )
 }

 
