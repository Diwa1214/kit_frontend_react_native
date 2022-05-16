import React from "react"
import {View, TextInput,StyleSheet,Text,TouchableOpacity} from "react-native"
import * as SMS from 'expo-sms';

import color from "../color/color"

export const SmsComponent =(props)=>{
    const [number,setNumber] =  React.useState("")
    const [message,setMessage] = React.useState("KIT Kalaignar karunanidhi institute of technology , this is invitation of our campus")
    const handleChange =(v)=>{
        setNumber(v)
    }
 
    const handelSubmit =async()=>{
      const user = await SMS.sendSMSAsync(["9047453537"],message)
    //   props.navigation.navigate("Admin")
    }
    return (
        <View style={styles.root}>
             <View>
                   <Text>Enter the number</Text>
             </View>
             <View style={styles.TextInputContainer}>
                 <TextInput placeholder="Enter the number" keyboardType="number-pad" style={styles.TextInput} onChangeText={(values)=>{return handleChange(values)}}/>
             </View>
             <View style={styles.send}>
                        <TouchableOpacity onPress={handelSubmit}>
                            
                            <Text style={{position:"relative",bottom:10,color:"white"}}>Send</Text>
                        
                    </TouchableOpacity>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    TextInputContainer:{
    //   width:"90%",
      width:"90%"
    },
    TextInput:{
        display:'flex',
        borderWidth:1,
        width:"100%",
        padding:10,
        position:"relative",
        top:10,
        borderColor:color.primary,
        borderRadius:25
    },
    send:{
      display:"flex",
      justifyContent:"flex-end",
      width:"50%",
      height:40,
      borderWidth:1,
      alignItems:"center",
      position:"relative",
      top:60,
      backgroundColor:color.primary,
      borderRadius:40,
      borderColor:color.primary,
     
    }
})