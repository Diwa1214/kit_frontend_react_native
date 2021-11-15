import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const AcademicScreen = () => {
    return (
        <View style={Styles.container} >
            <Text>Academic Screen</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    }
})

export default AcademicScreen
