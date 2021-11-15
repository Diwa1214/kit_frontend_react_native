import React from 'react'
import { View, Text,StyleSheet} from 'react-native'

const PlacementScreen = () => {
    return (
        <View style={Styles.container}>
            <Text>PlacementScreen</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    }
})

export default PlacementScreen
