import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import color from "../screens/color/color"
import FeedBack from "../screens/FeedBackScreen"
import Profile from "../screens/Profile"
import AddResult from "../screens/StaffComponent/AddResult"
import StaffHome from "../screens/StaffComponent/StaffHome"
import StaffScreen from "../screens/StaffComponent/StaffScreen"
import StudentComponent from "../screens/student"
import ListStudent from "../screens/student/ListStudent"
import StudentSplash from "../screens/student/studentList"
import StudentTextField from "../screens/student/StudentTextField"
import ResultScreenComponent from "../screens/Result/index.js"

const Stack = createNativeStackNavigator()



 export const AccountScreenNavigator = ()=>{
    return(
   <Stack.Navigator>
       <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
       
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
              <Stack.Screen name ="admin" component={StaffHome} />
              <Stack.Screen name ="AddStudent" component={ResultScreenComponent} options={{headerShown:false}} />
              <Stack.Screen name ="StaffScreen" component={StaffScreen}/>
              <Stack.Screen name="student" component={StudentComponent}  />
              <Stack.Screen name="studentSplash" component={StudentSplash}  options={{headerShown:false}}/>
              <Stack.Screen  name="studentDetails" component={ListStudent}  options={{headerShown:false}}/>
              <Stack.Screen name="studentProfile" component={StudentTextField} />
        </Stack.Navigator>
     )
 }

 
