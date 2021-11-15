import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView,Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { GetApi } from '../../../api/GetApi';
import Toast, { BaseToast } from 'react-native-toast-message';
import color from '../color/color';
import FullModal from '../Component/FullModal';
import TextInputComponent from '../Component/TextInput';



const StudentLogin = (props) => {
 const [number,SetNumber] = React.useState(1)
 const [Error,setError] =React.useState("")
 const validateYupSchema =Yup.object().shape({
    name:Yup.string().required().label("Name"),
    regno:Yup.mixed().required().label("Register Number"),
    clgName:Yup.string().required().label("College Name")
 })

 const {callback,data,error} = GetApi()

//console.log(error,"errrrrr");
 const handleSubmited=(value)=>{
  
   callback("getResult",value)

   if(error){
       return
   }
 }
 console.log("d",data,);
 console.log("error",error,error=="");
 const toastConfig = {
  success: ({ text1,text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'red'}}
      contentContainerStyle={{ paddingHorizontal: 15 }}
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
 useEffect(()=>{
  if(data){
    props.navigation.navigate("Result",{
      student:data
    })
 }
   if(error){
    Toast.show({
      position: 'bottom ',
      text1: 'Error message',
      text2: `${error}`,
      onHide: () => {
        SetNumber(1)
        
      },
    });
   
    SetNumber(0.3)
   }

  
 },[data,error])

    return (
      
<ScrollView style={{flex:1}}>
   <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />

   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <KeyboardAvoidingView style={{...Styles.container,opacity:number}}behavior="padding" keyboardVerticalOffset={0} >
        <Image style={{...Styles.image,opacity:number}} resizeMode="contain" source={require("../../assests/logo.png")}></Image>
         <View>
             <Text style={Styles.text} >SPLASH WITH TECHNOLOGY</Text>
         </View>
          
         <Formik initialValues={{name: "",regno: "",clgName: ""}} onSubmit={(value,{resetForm})=>{
           handleSubmited(value)
         }}   validationSchema={validateYupSchema}  >

           {({handleChange,handleSubmit,setFieldTouched,touched,errors,setFieldValue,values})=>{
             return (
                <>
           <TouchableOpacity  style={{...Styles.TextContainer,borderColor:color.primary}} activeOpacity={1}  >
                       <MaterialCommunityIcons name="email" color={color.primary} size={20} style={{marginLeft:12,bottom:12}}/>
                       <TextInput placeholder="Enter the Name" style={Styles.textInput}
                        onChangeText={handleChange("name")}
                        onBlur={()=>{
                             setFieldTouched("name")
                        }}
                       ></TextInput>
           </TouchableOpacity>
           {touched && errors.name ? <Text style={{color:"red"}}>{errors.name}</Text>:null }
        
             <TouchableOpacity  style={{...Styles.TextContainer,borderColor:color.primary}} activeOpacity={1}>
                      <MaterialCommunityIcons name="form-textbox-password" color={color.primary} size={20} style={{marginLeft:12,bottom:12}}/>
                      <TextInput placeholder="Enter the Register Number " style={Styles.textInput} 
                      onChangeText={handleChange("regno")}
                      onBlur={()=>{
                        setFieldTouched("regno")
                      }}
                      >
                    </TextInput>
             </TouchableOpacity>
                {touched && errors.regno ?  <Text style={{color:"red"}}>{errors.regno}</Text> :null}


                {/* <TouchableOpacity  style={{...Styles.TextContainer,borderColor:color.primary}} activeOpacity={1}>
                      <MaterialCommunityIcons name="form-textbox-password" color={color.primary} size={20} style={{marginLeft:12,bottom:12}}/>
                      <TextInput placeholder="Enter the College Name " style={Styles.textInput} 
                       onChangeText={handleChange("clgName")}
                       onBlur={()=>{
                         setFieldTouched("clgName")
                       }}
                       multiline={true}
                       numberOfLines={1}
                       textAlignVertical="center"
                       textBreakStrategy={"highQuality"}
                      ></TextInput>
               </TouchableOpacity> */}
               <FullModal handleClgModal ={(value)=>{
                     setFieldValue("clgName",value)
               }}/>
               {values["clgName"] ? 
               <TouchableOpacity  style={{...Styles.TextContainer,borderColor:color.primary}} activeOpacity={1}  >
                       <MaterialCommunityIcons name="email" color={color.primary} size={20} style={{marginLeft:12,bottom:12}}/>
                       <TextInput editable={false} style={Styles.textInput} value={values["clgName"]}></TextInput>
           </TouchableOpacity>: null}

               {!values["clgName"] && errors.clgName ? <Text style={{color:"red",flex:1}}>{errors.clgName}</Text>:null}

               

               <TouchableOpacity style={Styles.LoginBtn} onPress={handleSubmit} >
                       <Text style={Styles.loginText}>Result</Text>
                  </TouchableOpacity> 
     
                 </>
             )
           }}

      </Formik>
      </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
   </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image:{
        width:100,
        height:100,
        margin:16,
    },
    text:{
        fontWeight:"700",
        fontSize:16,
        top:12,
    },
    textInput:{
        borderRadius:50,
        width:100,
        borderColor:"blue",
        justifyContent:"center",
        alignItems:"center"
    },
    TextContainer:{
      flexDirection:"row",
      backgroundColor:"#f8f4f4",
      paddingTop:20,
      marginVertical:0,
      width:"90%",
      borderRadius:30,
      alignItems:"center",
      borderWidth:1,
      marginTop:35,
      marginLeft:20,
      marginRight:20
    },
    textInput:{
      bottom:12,
      marginLeft:13,
      color:"#48b4e0",
      fontSize:17,
      textDecorationLine:"none",
      fontWeight:"600"
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

  });

export default StudentLogin
