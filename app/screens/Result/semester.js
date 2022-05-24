import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native'
import React from 'react'
import Collapsible from 'react-native-collapsible';
import DocumentPicker from 'react-native-document-picker';
import { AntDesign } from '@expo/vector-icons';

import color from '../color/color'
import { Url } from '../../../config';
import { useNavigation } from '@react-navigation/native';

const SemesterScreenComponent = (props) => {

 const [SemesterVisible,setSemesterVisible] = React.useState(false)   
 const [file,setFile] = React.useState(null)
 const [index,setIndex] =React.useState(null) 
 const [loading,setLoading]= React.useState(false)
 const navigate = useNavigation()
 const handleCIA =()=>{
    // setSemesterVisible(!SemesterVisible)
    // props.setCatVisible(false)
    // props.setSemester(SemesterVisible)
    props.handleSemester()
 }
 
   const semester = ["Semester 1", "Semester 2" , "Semester 3","Semester 4","Semester 5","Semester 6","Semester 7","Semester 8"]

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

   const handleFileClear = ()=>{
    setFile("")
   }

   const NetworkPostCall = async(point,form)=>{
    setLoading(true)

    try{
        await fetch(`${Url.host}/post/${point}`,{
            method:"POST",
            body:form
        }).then(async(response)=>{
            let data = await response.json()
            let status = await response.status
             if(status === 200){
                  setLoading(false)
                 return navigate.navigate("admin")
              }
        })
      } 
      catch(error){
         console.log(error);
      }
   }

   const handleUpload = async(sem)=>{
     setLoading(true)  
    let form = new FormData()
    form.append('semester',{
      name:file.name,
      type:file.type,
      uri:file.uri
    }) 
     if(sem == "Semester 1" ){
         console.log("sem1")
         await NetworkPostCall("semester1",form)
     }
     else if(sem == "Semester 2"){
         await NetworkPostCall("semester2",form)

     }
     else if(sem == "Semester 3"){
         await NetworkPostCall("semester3",form)

     }
     else if(sem == "Semester 4"){
         console.log("okay");
          await NetworkPostCall("semester4",form)
        // if(status === 200){
        //   setLoading(false)
        // }
     }
     else if(sem == "Semester 5"){
         await NetworkPostCall("semester5",form)

     }
     else if(sem == "Semester 6"){
         await NetworkPostCall("semester6",form)

     }
     else if(sem == "Semester 7"){
         await NetworkPostCall("semester7",form)

     }
     else if(sem == "Semester 8"){
         await NetworkPostCall("semester8",form)

     }
   }

  return (
     <SafeAreaView style={{display:"flex",flex:1}}>
          <View style={style.root}>
               <View style={style.resultBox}>
                    <View style={style.resultBoxContainer}>
                        <View style={style.checkBoxRoot}>
                                <TouchableOpacity style={[style.checkBox,{backgroundColor:props.SemesterVisible ? "green":"white"}]} activeOpacity={0.8} onPress={handleCIA} ></TouchableOpacity>
                        </View>
                        <View style={style.ExamNameContainer}>
                            <Text style={style.ExamName}>Semester marks </Text>
                            {/* <View>
                                <Text></Text>
                            </View> */}
                        </View>
                    </View>
                  {props.SemesterVisible ? 
                   <ScrollView>
                    {semester.map((semester,i)=>{
                         return (
                          <View style={style.UploadContainer}>
                            <View>
                                <Text style={style.ExamName} >{semester}</Text>
                            </View>
                            <View style={style.ExamBoxContainer}>
                               { index === i && file?.name ? 
                             <> 
                               <View>
                                    <Text style={style.uploadedName}>{file?.name.slice(0,16) + "..."}</Text>
                                </View>
                                <TouchableOpacity onPress={handleFileClear}>
                                       <AntDesign name="closecircle" size={20} color="red" style={{paddingLeft:6}} />
                                </TouchableOpacity>
                              </>: 
                                <TouchableOpacity style={style.selectBtnContainer} onPress={()=>{ return handleSelect(semester,i)}}>
                                    <View  style={[style.uploadBtn,{borderColor:color.primary,opacity:1}]}>
                                        <Text style={{color:color.primary}}>Select</Text>
                                    </View>
                                </TouchableOpacity>}
                            </View>
                             {loading && index === i ? <ActivityIndicator size={20} color={color.primary} style={style.Loading} />:<TouchableOpacity style={style.uploadBtnContainer} onPress={()=>{
                                 setLoading(true)
                                 return handleUpload(semester)}}>
                                <View  style={style.uploadBtn}>
                                    <Text>upload</Text>
                                </View>
                             </TouchableOpacity> }
                          </View>
                         )
                    })}

                    
                 </ScrollView> : null}
               </View>
               
              
          </View>
     </SafeAreaView>
  )
}

export default SemesterScreenComponent

const style = StyleSheet.create({
    root:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        paddingTop:40
    },
    Loading:{
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-end",
      paddingLeft:20
    },

    resultBoxContainer:{
      padding:20,
      display:"flex",
      flexDirection:"row"
    },

    resultBox:{
        display:"flex",
        width:"95%",
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
    }
})