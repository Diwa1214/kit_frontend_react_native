import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default function ImageComponent(props) {
   
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
        if(props.imageUri){
           return Alert.alert("Delete","Are you delete this profile",[
            {
             text:"cancle"
            },
            {
                text:"Okay",
                onPress:()=>{
                   props.onChange(null)
                }
            }
        ])
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        props.onChange(pickerResult.uri)
      };
    return (
      <View style={{ justifyContent:"center",alignItems:"center",flex:1,marginBottom:props.marginBottom}}>

     <TouchableOpacity style={{...styles.cameraView}}activeOpacity={1} onPress={openImagePickerAsync}>
        <View  style={styles.icon}>
          {props.imageUri ? (<Image source={{uri:props.imageUri}} style={styles.image}  />) : ( <MaterialCommunityIcons name="camera" size={20} color="black"/>)}
       
       </View>
   </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    cameraView:{
       width:80,
      height:80,
      backgroundColor:"#f8f4f4",
      borderRadius:50,
    },
    icon:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    image:{
        width:70,
        height:70,
        overflow:"hidden",
        borderRadius:50
    }
 })