import React from 'react'
import { StyleSheet, TouchableOpacity,Text } from 'react-native'

export default function AppButton(props) {
    return (
       <TouchableOpacity style={{...styles.btn,borderColor:props.borderColor,width:props.width}}>
           <Text style={{...styles.text,color:props.color}}>{props.title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        height:45,
        borderRadius:35,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",

    },

    text:{
        fontSize:17,
        fontWeight:"600"
    }
})