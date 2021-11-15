import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';

import AppNavigator from './app/Navigator/AppNavigator';
import { AuthNavigator } from './app/Navigator/AuthNavigator';
import ImageComponent from './app/screens/Component/AccountComponent';
import TextInputComponent from './app/screens/Component/TextInputComponent';
import UploadScreen from './app/screens/Component/UploadScreen';
import SignUp from './app/screens/SignUp';
import AddResult from './app/screens/StaffComponent/AddResult';
import LoginScreen from './app/screens/Login';
import { AuthContext } from './app/screens/Context/AuthContext';
import authStorage from './app/screens/Storage/authStorage';
import jwtDecode from 'jwt-decode';



export default function App() {
  const [user,setUser] = React.useState()

const restoreToken = async()=>{
   const token = await authStorage.getToken()
   console.log(token,"dd");
   setUser(jwtDecode(token))
}

 useEffect(()=>{
     restoreToken()
 },[])


return (
   
      //  <AppNavigator/>
      //<AddResult/>
      //<UploadScreen/>
      <AuthContext.Provider value={{user,setUser}}>
              {user ? <AppNavigator/>: <AuthNavigator/>}
      </AuthContext.Provider>
      
      
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});
