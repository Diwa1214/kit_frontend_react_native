import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import color from '../color/color'
import { college } from '../data/Subject'

const FullModal = ({handleClgModal}) => {
    const [visible,setVisible] = React.useState(false)
    const handleModal = ()=>{
        setVisible(!visible)
    }
    return (
        <>
    <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-around"}}onPress={()=>{
        handleModal()
    }}>
        <View  style={styles.options}>
            <MaterialCommunityIcons name="arrow-collapse-down" size={24} color="white"/>
            <Text style={{color:"white",fontSize:16,fontWeight:"700"}}>Choose the College</Text>
        </View>
  </TouchableOpacity>
  <Modal visible={visible}>
                     <FlatList data={college} numColumns={2}  renderItem={({item})=>{
                         return (
                            <TouchableOpacity style={styles.modalClg} onPress={
                                ()=>
                                {
                                    handleClgModal(item.name)
                                    setVisible(!visible)
                                }}>
                                <View>
                                     <Image source={item.logo} style={styles.clgLogo}/>
                                </View>
                                <View style={{paddingTop:6}}>
                                    <Text style={{fontWeight:"700"}}>{item.name.slice(0,3)}</Text>
                                </View>
                           </TouchableOpacity>
                         )
                     }} keyExtractor ={(item)=>{return item.id}}>

                     </FlatList>
             </Modal>
  </>
    )
}

export default FullModal

const styles = StyleSheet.create({
    options:{
        width:"90%",
        height:50,
        borderColor:color.primary,
        borderWidth:1.5,
        borderRadius:30,
        margin:23,
        alignItems:"center",
        backgroundColor:color.primary,
        justifyContent:"space-around",flexDirection:"row"
    },
    modalClg:{
        margin:40,
        width:100,
        height:100,
        borderWidth:1,
        borderColor:color.primary,
        flexDirection:"column",
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12
    },
    clgLogo:{
        width:50,
        height:50,
        borderRadius:50
    }
})
