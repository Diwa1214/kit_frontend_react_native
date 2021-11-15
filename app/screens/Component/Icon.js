import React from 'react'
import {View} from "react-native"
import {MaterialCommunityIcons } from "@expo/vector-icons"
export default function Icon(props) {
    return (
        <View style={{width:props.size,backgroundColor:props.backgroundColor,height:props.size, borderRadius:props.size /2}}>
            <MaterialCommunityIcons name="email" size={props.size * 0.5} color="white" />
        </View>
    )
}
