import { styles } from 'ansi-colors'
import React from 'react'
import { Image ,View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import AppText from './AppText'

export default function Card(props) {
    return (
        <TouchableOpacity style={styless.container}>
            <Image source={props.image} style={styless.cardimg}/>
             <AppText title ={props.title} color="gray" fontWeight="bold" />
        </TouchableOpacity>
    )
}

const styless = StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginBottom:12,
        marginTop:40,
        marginLeft:20,
        borderRadius:15,
        width:"40%",
        height:150,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        elevation:5,
        borderLeftColor:"#6db5d1",
        borderLeftWidth:5
    },
    cardimg:{
        width:70,
        height:70,
        borderRadius:50
    }
})