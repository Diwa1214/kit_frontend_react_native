import React from "react"
import {View,StyleSheet} from "react-native"
import UploadComponent from "./uploadComponent"


const StudentComponent = ()=>{
    return (
        <View style={style.root}>
             <UploadComponent/>  
        </View>
    )
}

const style = StyleSheet.create({
    root:{
       display:"flex",
       flex:1,
    }
})

export default StudentComponent