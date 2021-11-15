import React from 'react'
import { View, Text } from 'react-native'

const ErrorComponent = ({text}) => {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"red",fontWeight:"700",fontSize:14}}>{text}</Text>
        </View>
    )
}

export default ErrorComponent
