import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Collapsible from 'react-native-collapsible';
import DocumentPicker from 'react-native-document-picker';
import color from '../color/color'
import { AntDesign } from '@expo/vector-icons';
import {Url} from "../../../config/index.js"
import SemesterScreenComponent from './semester';

const ResultScreenComponent = () => {
 const [SemesterVisible,setSemesterVisible] = React.useState(false)   
 const [CatVisible,setCatVisible] = React.useState(false)   
 const [file,setFile] = React.useState(null)
 const [index,setIndex] =React.useState(null) 


 const handleCIA =()=>{
   setCatVisible(!CatVisible)
   setSemesterVisible(false)

 }
  const handleSelect = async(value,index)=>{
    try{
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        }); 
        setFile(res[0])
        setIndex(index)
    }
    catch(error){
        if (DocumentPicker.isCancel(err)) 
           {
            // User cancelled the picker, exit any diarlogs or menus and move on
            console.log('User cancelled')
            } 
        else 
        {
            throw err;
        }
    }
 }
  
   const CIAMarks = ["CIA 1", 'CIA 2','CIA 3']

   const handleFileClear = ()=>{
    setFile("")
   }

   const handleUpload = async()=>{
        let form = new FormData()
        form.append('csv',{
        name:file.name,
        type:file.type,
        uri:file.uri
        })
        const result = await  fetch(`${Url.host}/`)
   }

   const handleSemester = ()=>{
     setSemesterVisible(!SemesterVisible)
     setCatVisible(false)

   }

   

  return (
     <SafeAreaView style={{display:"flex",flex:1}}>
          <View style={style.root}>
               <View style={style.resultBox}>
                    <View style={style.resultBoxContainer}>
                        <View style={style.checkBoxRoot}>
                                <TouchableOpacity style={[style.checkBox,{backgroundColor:CatVisible ? "green":"white"}]} activeOpacity={0.8} onPress={handleCIA} ></TouchableOpacity>
                        </View>
                        <View style={style.ExamNameContainer}>
                            <Text style={style.ExamName}>CIA marks </Text>
                        </View>
                    </View>
                  {CatVisible ?  
                  <View>
                    
                    {CIAMarks.map((cia,i)=>{
                        return (
                            
                            <View style={style.UploadContainer}>
                            <View>
                                <Text style={style.ExamName} >{cia}</Text>
                            </View>
                            <View style={style.ExamBoxContainer}>
                               {i === index && file?.name ? 
                             <> 
                               <View>
                                    <Text style={style.uploadedName}>{file?.name.slice(0,16) + "..."}</Text>
                                </View>
                                <TouchableOpacity onPress={handleFileClear}>
                                       <AntDesign name="closecircle" size={20} color="red" style={{paddingLeft:6}} />
                                </TouchableOpacity>
                              </>: 
                                <TouchableOpacity style={style.selectBtnContainer} onPress={()=>{handleSelect(cia,i)}}>
                                    <View  style={[style.uploadBtn,{borderColor:color.primary,opacity:1}]}>
                                        <Text style={{color:color.primary}}>Select</Text>
                                    </View>
                                </TouchableOpacity>}
                            </View>
                             <TouchableOpacity style={style.uploadBtnContainer} >
                                <View  style={style.uploadBtn}>
                                    <Text>upload</Text>
                                </View>
                             </TouchableOpacity>
                         </View>
                        )
                    })}

                  

                   
                 </View> : null}
               </View>
               
               <SemesterScreenComponent   handleSemester={handleSemester} SemesterVisible={SemesterVisible}  />
              
          </View>
     </SafeAreaView>
  )
}

export default ResultScreenComponent

const style = StyleSheet.create({
    root:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        paddingTop:40
    },

    resultBoxContainer:{
      padding:20,
      display:"flex",
      flexDirection:"row"
    },

    resultBox:{
        display:"flex",
        width:"90%",
        borderWidth:1,
        borderColor:color.primary,
        borderRadius:5,
        height:"auto",
        flexDirection:"column"
    },
    checkBox:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:color.primary,
        borderRadius:20

    },
    checkBoxRoot:{
        display:"flex",
        width:"20%",
        justifyContent:"center",
        alignItems:"center",
    },
    ExamNameContainer:{
        display:"flex",
        alignItems:"center",
        width:"80%",
        flexDirection:"row"
    },
    ExamName:{
        fontSize:16,
        color:color.primary,
        fontWeight:"700"
    },
    ExamBoxContainer:{
        display:"flex",
        flexDirection:"row",
        width:"50%",
        justifyContent:"center"
    },
    UploadContainer:{
        display:"flex",
        flexDirection:"row",
        paddingTop:10,
        paddingLeft:15,
        paddingBottom:10
    },
    uploadedName:{
        fontSize:14,
        fontWeight:"700",
        paddingLeft:18
    },
    uploadBtn:{
        width:70,
        height:30,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderColor:"gray",
        borderWidth:1,
        color:"gray",
        opacity:0.5,
        borderRadius:5
    },
    uploadBtnContainer:{
        display:"flex",
        width:"100%",
        alignItems:"flex-end",
        flex:1,
        paddingRight:20
    },
    selectBtnContainer:{
        display:"flex",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        paddingLeft:20,
    }
})