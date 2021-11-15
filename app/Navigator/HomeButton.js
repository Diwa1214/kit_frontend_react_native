import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const HomeButton = (props) => {
    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}>
            <MaterialCommunityIcons name="home" size={24} color="white"/>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
       backgroundColor:"#48b4e0",
       width:80,
       height:80,
       borderRadius:50,
       bottom:40,
       borderWidth:7,
       borderColor:"white",
       justifyContent:"center",
       alignItems:"center"
    }
})

export default HomeButton
