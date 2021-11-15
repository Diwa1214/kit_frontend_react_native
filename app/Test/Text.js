import React from 'react'
import { View } from 'react-native'
import AppButton from '../screens/Component/AppButton'
import AppText from '../screens/Component/AppText'

export default function Texts() {
    return (
        <View style={{flex:1,justifyContent:"space-evenly",alignItems:"center",flexDirection:"row"}}>
            
               <AppButton title="Login" borderColor="#48b4e0" color="#48b4e0"/>
               <AppButton title="SignUp" borderColor="#C02E4C" color ="#C02E4C"/>
           
        </View>
    )
}
