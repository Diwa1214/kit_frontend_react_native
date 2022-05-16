import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../color/color'
 import { AntDesign } from '@expo/vector-icons'

const ModalResult = () => {
    const [ciavisible,setCatVisible] = React.useState(false) 

    const handleCIA= ()=>{
        setCatVisible(!ciavisible)
    }
  return (
    <View style={Styles.container}>

    <View style={Styles.ExamContainerBox}>
         <View style={{display:"flex",width:"100%"}}>
          <View style={Styles.ExamBox}>
                  <View>
                      <Text style={Styles.tableHeader}>CIA Results</Text>
                  </View>
                  <TouchableOpacity onPress={handleCIA}>
                      {ciavisible ? <AntDesign name='arrowup' size={20} color={color.primary}/> :
                      <AntDesign name='arrowdown' size={20} color={color.primary}/>  } 
                  </TouchableOpacity>
          </View>
         </View>
        {ciavisible ?  
         <View style={Styles.ResultBoxContainer}>
             <View style={Styles.ResultBoxHeader}>
                   <View>
                          <Text style={Styles.tableHeader}>CIA 1</Text>
                   </View>
                   <TouchableOpacity style={{display:"flex",flexDirection:"row"}}>
                        <Text style={[Styles.DrakColor,{color:color.primary,paddingRight:20}]}>Download</Text>
                        <AntDesign name='download' size={18} color={color.primary} />
                   </TouchableOpacity>
             </View>
              <View style={Styles.ExamContentContainer}>
                    <View style={Styles.ExamContentBox}>
                         <View style={Styles.SINO}>
                               <Text>1</Text>
                         </View>
                         <View style={Styles.ExamName}>
                               <Text style={[Styles.DrakColor,{paddingLeft:20}]}>BS1214 Network Enginnering</Text>
                         </View>
                         <View style={Styles.ExamMark}>
                               <Text style={Styles.DrakColor}>100</Text>
                         </View>
                         <View style={Styles.ExamStatus}>
                                <AntDesign name='checkcircle' color="green" size={17}/>
                         </View>
                    </View>
              </View>

              <View style={Styles.ExamContentContainer}>
                    <View style={Styles.ExamContentBox}>
                         <View style={Styles.SINO}>
                               <Text>1</Text>
                         </View>
                         <View style={Styles.ExamName}>
                               <Text style={[Styles.DrakColor,{paddingLeft:20}]}>BS1214 Network Enginnering</Text>
                         </View>
                         <View style={Styles.ExamMark}>
                               <Text style={Styles.DrakColor}>100</Text>
                         </View>
                         <View style={Styles.ExamStatus}>
                                <AntDesign name='checkcircle' color="green" size={17}/>
                         </View>
                    </View>
              </View>
              <View style={Styles.ExamContentContainer}>
                    <View style={Styles.ExamContentBox}>
                         <View style={Styles.SINO}>
                               <Text>1</Text>
                         </View>
                         <View style={Styles.ExamName}>
                               <Text style={[Styles.DrakColor,{paddingLeft:20}]}>BS1214 Network Enginnering</Text>
                         </View>
                         <View style={Styles.ExamMark}>
                               <Text style={Styles.DrakColor}>100</Text>
                         </View>
                         <View style={Styles.ExamStatus}>
                                <AntDesign name='checkcircle' color="green" size={17}/>
                         </View>
                    </View>
              </View>

              
        </View> :null}
    </View>
</View>
  )
}

export default ModalResult

const Styles = StyleSheet.create({
    container:{
        display:"flex",
        width:"100%",
        paddingTop:50,
        flexDirection:"column",
        alignItems:"center"
    },
    ExamContainerBox:{
        display:"flex",
        width:"93%",
        height:"auto",
        borderWidth:1,
        paddingTop:18,
        paddingLeft:11,
        paddingRight:11,
        borderColor:color.primary,
        borderRadius:5,
        flexDirection:"column",
        marginBottom:20
    },
    ExamBox:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:30
    },
    ResultBoxContainer:{
       display:"flex",
       width:"100%",
       height:"auto",
       borderWidth:1,
       borderRadius:9,
       flexDirection:"column",
       borderColor:color.primary,
       marginBottom:40
    },
    ResultBoxHeader:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      padding:15
    },
    ExamContentContainer:{
       display:"flex",
       flexDirection:"column",
       width:"100%",
       alignItems:"center",
       padding:10,
       marginBottom:10
    },  
    ExamContentBox:{
      width:"100%",
      display:"flex",
      height:60,
      flexDirection:"row",
        elevation:2.5,
        paddingTop:5,
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
        borderTopLeftRadius:4,
        borderTopRightRadius:3,
    }, 
     tableHeader:{
        fontWeight:"700",
        color:"#778899", 
        fontSize:14
    },
    SINO:{
         flex:0.2,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    ExamName:{
        flex:0.5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
    },
    ExamMark:{
        flex:0.15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",        
    },
    ExamStatus:{
        flex:0.15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",        
    },
    DrakColor:{
        fontSize:14,
        fontWeight:"700"
    }
 })