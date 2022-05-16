import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,TextInput } from 'react-native'
import React,{useEffect} from 'react'
import FullModal from '../Component/FullModal'
import { Formik } from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from '../color/color'
import * as Yup from "yup";
import {GetApi} from "../../../api/GetApi"
import ModalComponent from '../Component/Modal'
import { useNavigation } from '@react-navigation/native'
import Toast, { BaseToast } from 'react-native-toast-message'

const StudentSplash = () => {
    const [visible,setVisible] = React.useState(false)
    const navigate = useNavigation()
    const [number,SetNumber] = React.useState(1)

   const validationSchema = Yup.object().shape({
       clgName:Yup.string().required("College is required"),
       year:Yup.string().required(" Please select the year ")
   })

   const toastConfig = {
    success: ({ text1,text2, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: 'red'}}
        contentContainerStyle={{ paddingHorizontal: 15,zIndex:1 }}
        text1Style={{
          fontSize: 17,
          fontWeight: 'bold'
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: 'bold',
         color:"red" 
        }}
        text1={text1}
        text2={text2}
      />
    )
  };

   let {callback,data,error,res} = GetApi()

   const handleVisible=()=>{
       setVisible(true)
   }
   const BackDrop=()=>{
    setVisible(false)
   }
   const Swip=()=>{
    setVisible(false)
   }

   const getData =()=>{
       console.log(data,"Data");
   
   }

   useEffect(()=>{
    if(res?.data?.status === "200" && res?.data?.data?.length > 0){
        return navigate.navigate("studentDetails",{state:res?.data?.data})
     }
     else if (error){
      return  Toast.show({
            position: 'top',
            text1: 'Error message',
            text2: `${error.msg}`,
            onHide: () => {
              SetNumber(1)
              
            },
          });
     }
   },[data,error])
 


  return (
      <>
    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />

     <SafeAreaView style={styles.root}>
          
          <View>
             <Formik initialValues={{clgName:"",year:""}} onSubmit={(values)=>{console.log(values);}} validationSchema={validationSchema} >
                 {({handleChange,handleBlur,handleSubmit,setFieldValue,values,errors,resetForm})=>{
                     return (
                         <View style={{marginTop:50}}>
                         <View  style={styles.ModalContainer}>
                             <FullModal handleClgModal={(values)=>{ return setFieldValue("clgName",values)}}/>
                             {values["clgName"] ? 
                         
                            <TouchableOpacity style={styles.TextContainer}>
                                <MaterialCommunityIcons name="email" color={color.primary} size={20} style={{marginLeft:12,bottom:8}}/>
                                <TextInput editable={false} style={styles.textInput} value={values["clgName"]}></TextInput>
                            </TouchableOpacity>
                             :null}
                                {!values["clgName"] && errors.clgName ? <Text style={styles.errorText}>{errors.clgName}</Text>:null}
                            
                                <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-around"}} onPress={handleVisible} >
                                    <View style={styles.options}>
                                        <MaterialCommunityIcons name="arrow-collapse-down" size={24} color="white"/>
                                        <Text style={{color:"white",fontSize:16,fontWeight:"700"}}>Choose the Year</Text>
                                    </View>
                               </TouchableOpacity>

                               {values["year"] ? 
                         
                                <TouchableOpacity style={{...styles.TextContainer,marginTop:25}}>
                                    <MaterialCommunityIcons name="email" color={color.primary} size={20} style={{marginLeft:12,bottom:8}}/>
                                    <TextInput editable={false} style={styles.textInput} value={values["year"]}></TextInput>
                                </TouchableOpacity>
                                 :null}
                                {!values["year"] && errors.year ? <Text style={{...styles.errorText,marginTop:13}}>{errors.year}</Text>:null}

                         </View>
                        

                         <View style={styles.ButtonContainer} >
                            <TouchableOpacity style={styles.LoginBtn} onPress={async()=>{
                               let year = values.year.slice(0,1)
                               let new_value = Object.assign(values,{year:year})
                               await callback(`get/studentData/${values.clgName}/${values.year}`)
                                 resetForm()
                            }} >
                                    <Text style={styles.loginText}>Check</Text>
                            </TouchableOpacity> 
                         </View>
                         <ModalComponent handleBackDrop={BackDrop} handleSwipe={Swip} handleSelect={(values)=>{setFieldValue("year",values)}}  visiblity={visible} />
                         </View>
                     )
                 }}
 
             </Formik>
        </View>
     </SafeAreaView>
     </>
  )
}

export default StudentSplash

const styles = StyleSheet.create({
   root:{
       display:"flex",
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       marginTop:70
   },
   TextContainer:{
    flexDirection:"row",
    backgroundColor:"#f8f4f4",
    paddingTop:10,
    marginVertical:0,
    width:"90%",
    borderRadius:30,
    alignItems:"center",
    borderWidth:1,
    marginLeft:20,
    marginRight:20,
    borderColor:color.primary
  },
 
  errorText:{
    color:"red",
    fontSize:16,
    fontWeight:"700"
  },

  textInput:{
    borderRadius:50,
    width:"90%",
    borderColor:"blue",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    color:color.primary,
    position:"relative",
    bottom:13,
    left:10,
    fontSize:18
 },
 
 ModalContainer:{
    display:"flex",flex:1,alignItems:"center",justifyContent:"center"
 },

 ButtonContainer:{
    display:"flex",flex:1,justifyContent:"center",alignItems:"center"
 },
 options:{
    width:"90%",
    height:50,
    backgroundColor:color.primary,
    borderRadius:30,
    marginTop:18,
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row",
},

 LoginBtn:{
    width:"50%",
    justifyContent:"center",
    marginTop:17,
    alignItems:"center",
    borderWidth:1,
    borderColor:"#48b4e0",
    borderRadius:30,
    height:45,
    backgroundColor:"#48b4e0"
  },
  loginText:{
    color:"white",
    fontWeight:"700",
   
  }

})