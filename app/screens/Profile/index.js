import {  MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React,{useEffect} from 'react'
import { Text,View,StyleSheet, TouchableOpacity,Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import AccountComponent from '../Component/AccountComponent';

export default function Profile() {
  const [state,setState] = React.useState({
    imageUri:""
  })
  
 

  useEffect(() => {
   
  }, [])
  

    return (
      <View style={styles.profileContainer}>
         <AccountComponent  
         imageUri={state.imageUri} 
         onChange={(uri)=>{
            setState({
              imageUri:uri
            })
         }} />
      </View>
    )
}

const styles = StyleSheet.create({
   profileContainer:{
     flex:1,
     justifyContent:"flex-start",
     padding:50
   }
})
