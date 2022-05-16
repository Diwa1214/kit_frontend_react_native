import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator, } from 'react-native'
import React,{useEffect} from 'react'
import color from '../color/color'
import DocumentPicker from 'react-native-document-picker';
import { AntDesign } from '@expo/vector-icons';
import FilePickerManager from 'react-native-file-picker';
import PostApi from "../../../api/PostApi"
import { Url } from '../../../config';
import { useNavigation } from '@react-navigation/native';

const UploadComponent = (props) => {
   const {callback,data}  = PostApi()
   const navigation =  useNavigation()
   const [responseData,setResponseData] = React.useState([])
   const [file,setFile] = React.useState(null)
   const [loading,setLoading] =React.useState(false)
  const progress =(value)=>{
    console.log(value)
  }

  const handleFileChange = async()=>{
    try{

      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.csv,DocumentPicker.types.doc,DocumentPicker.types.docx],
        });
        setFile(res[0])
    }
    catch(error){
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any diarlogs or menus and move on
        console.log('User cancelled')
        } else {
        throw err;
        }
    }
  
  }  





  const handleUpload = async()=>{
          
          let form = new FormData()
          form.append('csv',{
            name:file.name,
            type:file.type,
            uri:file.uri
          }) 
          setLoading(true)
         await callback(progress,"post/student",null,form)
          // await fetch(`${Url.host}/post/student`,{
          //     method:"POST",
          //     body:form
          // }).then((res)=>{

          //   console.log(res,"response")
          // })
  }



  useEffect(()=>{
    if(data){
       navigation.navigate("admin")
    }
  },[data,responseData])

  return (
    <>
    {loading ?  
     <View style={style.activityIndicator}>
          <ActivityIndicator size="large" color={color.primary}/>
    </View>:
    <View style={style.root}>
        <TouchableOpacity  onPress={handleFileChange} style={style.DocumentContainer}>
             <View style={{width:"100%"}}>
                 <Text style={style.DocumentBox}>{file && file !==null ? "update":"select"}</Text>
             </View>
        </TouchableOpacity>
      
        {file && file !==null ? 
        <>
        <View style={style.UploadedContainer}>
             <View style={style.uploadedTextContainer}>
                   <Text style={style.uploadText}>{file.name}</Text>
             </View>
             <View style={style.uploadedIconContainer}>
                   <AntDesign name="checkcircle" size={24} color="green" />
             </View>
        </View>
        </> 
        : null}
        <TouchableOpacity style={style.uploadBtn} activeOpacity={0.5} onPress={handleUpload}>
             <Text style={style.Btntext}>Upload</Text>
        </TouchableOpacity>
    </View>}
    </>
  )
}

const style = StyleSheet.create({
    root:{
        display:'flex',
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },

    activityIndicator:{
      display:"flex",
      flex:1,
      justifyContent:"center"
    },
    
    DocumentContainer:{
       position:"relative",
       marginTop:50,
       width:100,
       height:100,
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       borderRadius:50,
       borderWidth:1,
       borderColor:`${color.primary}` 
      //  borderStyle:`1px solid ${color.primary}` 
    },  
    DocumentBox:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      fontSize:17,
      fontWeight:"700"
    },  

    UploadedContainer:{
      display:"flex",
      width:"80%",
      height:50,
      flexDirection:"row",
      borderWidth:1,
      borderColor:color.primary,
      marginTop:20,
      justifyContent:"space-between",
      borderRadius:10,

    }, 

     uploadedTextContainer:{
       paddingTop:10,
       paddingLeft:10
     }, 
     
     uploadText:{
       color:"black",
       fontSize:16,
       fontWeight:"700"
     },
     
     uploadedIconContainer:{
      paddingTop:10,
      paddingRight:10
    },   

    uploadBtn:{
        width:"60%",
        height:50,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:color.primary,
        borderRadius:25,
        marginTop:20
    },
    Btntext:{
        color:"white",
        fontSize:17,
        fontWeight:'600' 
    }
})

export default UploadComponent