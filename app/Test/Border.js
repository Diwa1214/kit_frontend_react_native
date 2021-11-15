import React from 'react'
import { Text, View } from 'react-native'

export default function Border() {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{
                width:100,height:100,backgroundColor:"blue",borderLeftWidth:10,borderColor:"red",elevation:7
                }} >
              <View style={{backgroundColor:"yellow",width:50,height:50,paddingVertical:20}}></View>
          </View>
        </View>
      
    )
}
