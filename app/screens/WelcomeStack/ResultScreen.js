import React, { useEffect } from 'react'
import { View, Text,StyleSheet,Image ,Dimensions, FlatList} from 'react-native'
import color from '../color/color'
import { resultData } from '../data/result'
import ResultComponent from './component/ResultComponent'
const {width:screenWidth, height:screenHeight} =Dimensions.get("window") 
const ResultScreen = (props) => {
   const data = props.route.params.student
   const [student,setStudent] = React.useState([])

   
    return (
        <View style={Styles.container}>
           <View style={{flex:1}} >
               <ResultComponent item ={data}/>
          </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        //justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"red",
        width:"100%",
        padding:20
    },
    
})


export default ResultScreen
