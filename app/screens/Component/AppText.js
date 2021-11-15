import React from 'react'
import { Text ,View,StyleSheet} from 'react-native'

export default function AppText(props) {
    return (
        <View>
              <Text 
              style=
              {{...styles.container,color:props.color,fontWeight:props.fontWeight,textAlign:props.alignItem,paddingTop:props.paddingTop}}
              >
                  {props.title}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        fontSize:16,
        top:7
    }
})
