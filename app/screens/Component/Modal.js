import { MaterialCommunityIcons } from '@expo/vector-icons';
import React,{useEffect} from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import color from '../color/color';
import {  years } from '../data/Subject';

const ModalComponent = (props) => {

    const [on, setOn] = React.useState(null)
  
   const onClicked =(item)=>{
    let on = years.findIndex((i)=>{
        return i == item
     })
     setOn(on)
   }
    return (
        <Modal isVisible={props.visiblity}
        hasBackdrop 
        swipeDirection={["down"]} 
        backdropColor="gray"
        onBackdropPress={props.handleBackDrop}
        coverScreen
        onSwipeComplete={props.handleSwipe}
        style={style.modalView}
        >
            <View style={style.modalContainer}>
                {years.map((item,index)=>{
                    return (
                    <View key={index}>
                      <TouchableOpacity 
                      accessibilityRole={  'radio'} 
                      style={{flexDirection:"row",
                      justifyContent:"space-between",
                      marginTop:7}} 
                      onPress={()=>{
                         onClicked(item)
                         props.handleSelect(item)
                      }}
                      > 
                      
                    
                       <Text style={{fontSize:16,fontWeight:"700",color:(on == index) ? color.primary:"black"}}>{item}</Text>
                       <MaterialCommunityIcons name={on == index ? "check-circle":"check-circle-outline"} size={23} color={(on == index) ?color.primary:"black"}/>
                     </TouchableOpacity>
                   </View>
                         )
                       })}
                      
               
            
            </View>
       
       </Modal>
    )
}

const style =StyleSheet.create({
    modalView:{
        margin:0,
        justifyContent:"flex-end"
    },
    modalContainer:{
        padding:30,
        backgroundColor:"white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    }
})
export default ModalComponent
