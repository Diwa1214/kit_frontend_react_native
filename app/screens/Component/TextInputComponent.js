import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import color from '../color/color';

const TextInputComponent = ({placeholder,type,secure,...otherProps}) => {
    return (
        <View style={{justifyContent:"center",alignItems:"center",margin:16}}>
            <View style={styles.mainContainer}>
                  
                         <View style={{flexDirection:"row",flex:1,padding:1}}>
                             <MaterialCommunityIcons name="email" size={24} color={color.primary} style={{margin:10}}/>
                             <TextInput style={{flex:1}} 
                             placeholder={placeholder}
                             keyboardType={type}
                             secureTextEntry={secure}
                             {...otherProps} 
                             />
                         </View>
                        
                  
            </View>
        </View>
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    mainContainer:{
        width:"90%",
        height:44,
        backgroundColor:"white",
        borderWidth:1,
        borderColor:color.primary,
        borderRadius:25,

     }
  
})
