import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet,View,Text,ActivityIndicator} from 'react-native';

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
import ReactNativeBiometrics from 'react-native-biometrics'
import ResultScreenComponent from './app/screens/Result';
import ResultComponent from "./app/screens/WelcomeStack/component/ResultComponent"
import SignUpScreen from './app/screens/SignUpScreen';
import { Modal } from 'react-native-paper';




export default function App() {
  const [user,setUser] = React.useState()
  const [loading,setLoading] = React.useState(true)
const restoreToken = async()=>{
   const token = await authStorage.getToken()
   setUser(jwtDecode(token))
}
const BioMetric = async()=>{
  let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
  let payload = epochTimeSeconds

  const compatiable = await ReactNativeBiometrics.isSensorAvailable()
  if(compatiable){
     ReactNativeBiometrics.createKeys("Fingerprint").then((result)=>{
        console.log("fingerPrint",result)
     })
  }
  ReactNativeBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload: payload
  })
  .then((resultObject) => {
    const { success, signature } = resultObject
    if (success) {
      console.log(signature,"signature")
      // verifySignatureWithServer(signature, payload)
    }
  })
}

 useEffect(()=>{
     restoreToken()
     if(loading){
        setTimeout(()=>{
          setLoading(false)
        },120)
     }
   
    //  BioMetric()
 },[loading,user])


return (
   
    <>
    {loading  ? 
     <>
        <Modal visible={loading} style={styles.container}>
               <ActivityIndicator size="large" style={styles.container} color="#48b4e0"/>
        </Modal>
    </>:  
    
    <AuthContext.Provider value={{user,setUser}}>
              {user ? <AppNavigator/>: <AuthNavigator/>}
              {/* <AuthNavigator/> */}
     </AuthContext.Provider>}
    
    </>
   
      
      
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});
