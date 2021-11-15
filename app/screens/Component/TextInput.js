import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import {  KeyboardAvoidingView, TouchableOpacity, Keyboard ,TextInput,StyleSheet,TouchableWithoutFeedback,View } from 'react-native'
import color from '../color/color'

const TextInputComponent = ({placeholder,type,name,...otherProps}) => {
 
    return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
     <KeyboardAvoidingView style={Styles.container} behavior="height" keyboardVerticalOffset={0} >
         <TouchableOpacity  style={{...Styles.TextContainer,borderColor:color.primary}} activeOpacity={1}  >
             <MaterialCommunityIcons name={name} color={color.primary} size={27} style={{marginLeft:12,bottom:12}}/>
             <TextInput 
                   
                   placeholder={placeholder} 
                   style={Styles.textInput} 
                  keyboardType={type}
                  {...otherProps}
             >
           </TextInput>
          
      </TouchableOpacity>
     </KeyboardAvoidingView>
</TouchableWithoutFeedback>
    )
}


const Styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1
    },
    image:{
        width:100,
        height:100
    },
    text:{
        fontWeight:"700",
        fontSize:19,
        top:12,
    },
    textInput:{
        borderRadius:50,
        width:100,
        borderColor:"blue"
    },
    TextContainer:{
      flexDirection:"row",
      backgroundColor:"#f8f4f4",
      paddingTop:20,
      marginVertical:30,
      width:"90%",
      borderRadius:30,
      alignItems:"center",
      borderWidth:1,
      marginBottom:12,
      marginTop:40,
      marginLeft:20,
      marginRight:20
    },
    textInput:{
      bottom:12,
      marginLeft:13,
      color:"#48b4e0",
      fontSize:17,
      textDecorationLine:"none",
      fontWeight:"600"
    },
    LoginBtn:{
      width:"50%",
      justifyContent:"center",
      marginTop:17,
      alignItems:"center",
      borderWidth:1,
      borderColor:"#48b4e0",
      borderRadius:30,
      height:45,
      backgroundColor:"#48b4e0"
    },
    loginText:{
      color:"white",
      fontWeight:"700",
     
    }

  });

export default TextInputComponent
