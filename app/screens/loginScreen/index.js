import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Checkbox, HelperText, TextInput } from 'react-native-paper'
import { Formik, useFormik } from 'formik'
import color from '../color/color'
import * as Yup from "yup";
import { Url } from '../../../config'
import jwtDecode from 'jwt-decode'
import { AuthContext } from '../Context/AuthContext'
import authStorage from '../Storage/authStorage'
import { useNavigation } from '@react-navigation/native'
import Toast, { BaseToast } from 'react-native-toast-message'
import ReactNativeBiometrics from 'react-native-biometrics'

const LoginScreen = () => {
   const [focus,setFocus] = React.useState(false)
   const customStyle = focus ? styles.InputFocus : styles.Input 
   const authContext = React.useContext(AuthContext)
   const [number,SetNumber] = React.useState(1)

   const navigation = useNavigation()
   const validateYupSchema = Yup.object().shape({
    email:Yup.string().email().required().label("Email"),
    password:Yup.string().required().min(7).label("Password"),
    
   
  })

  const toastConfig = {
    success: ({ text1,text2, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: 'red',zIndex:5}}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 17,
          fontWeight: 'bold',
          zIndex:1
        }}
        text2Style={{
          fontSize: 14,
          fontWeight: 'bold',
         color:"red",
         zIndex:1
        }}
        text1={text1}
        text2={text2}
      />
    )
  };

   const handleFocus = ()=>{
      return setFocus(true)
   }
   const handleLogin =async(value)=>{
       console.log(value,"value")
      const user = await fetch(`${Url.host}/login`,{method:"POST",
      headers:{
         "Content-type":"application/json"
      },
      body:JSON.stringify(value)})
      const response = await user.json()
    if(response?.status === '200'){
        // const BioMetric = async()=>{
        //     let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
        //     let payload = epochTimeSeconds
          
        //     const compatiable = await ReactNativeBiometrics.isSensorAvailable()
        //     console.log(compatiable,"com")
        //     if(compatiable?.available){
        //        ReactNativeBiometrics.createKeys("Fingerprint").then((result)=>{
        //           console.log("fingerPrint",result)
        //        })
        //     }
        //     ReactNativeBiometrics.createSignature({
        //       promptMessage: 'Login with phone fingerprint',
        //       payload: payload
        //     })
        //     .then((resultObject) => {
        //       const { success, signature } = resultObject
        //       if (success) {
        //         // console.log(signature,"signature")
        //         // // verifySignatureWithServer(signature, payload)
        //         let user =  jwtDecode(response.data)
        //         console.log(user,"user")
        //         authContext.setUser(user)
        //         authStorage.storeToken(response.data)
        //         navigation.navigate("Student")
        //       }
        //     })
        //   }
        //   BioMetric()
        let user =  jwtDecode(response.data)
        console.log(user,"user")
        authContext.setUser(user)
        authStorage.storeToken(response.data)
        navigation.navigate("Student")
    }
    else{
      Toast.show({
        position: 'top',
        text1: 'Error message',
        text2: `${response?.msg}`,
        onHide: () => {
          SetNumber(1)
        },
      });
     
      SetNumber(0.3)
    }
   }
  return (
    <SafeAreaView style={styles.root}>
              <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    <View style={styles.Top}>
              <Image source={require("../../assests/login.png")} style={styles.Image}></Image>
        </View>
        <Formik initialValues={{email:"",password:""}} validationSchema={validateYupSchema} onSubmit={(value)=>{return handleLogin(value)}}>
        {({setFieldValue,touched,setFieldTouched,values,errors,handleSubmit})=>{
             return (
            <ScrollView style={styles.bottom}>
            
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Email' style={customStyle} onChangeText={(text)=>{return setFieldValue("email",text)}} error={errors.email} ></TextInput>
                    <HelperText type='error' visible={errors.email}>{errors.email}</HelperText>

                </View>
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Password' style={customStyle} onChangeText={(text)=>{return setFieldValue("password",text)}} error={errors.password} passwordRules="@" ></TextInput>
                    <HelperText type='error' visible={errors.password}>{errors.password}</HelperText>

                </View>
                <View style={{display:"flex",flex:1,alignItems:"center"}}>
                      <TouchableOpacity style={styles.SignUpContainer} onPress={handleSubmit}>
                           <Text style={styles.SignUp}>Login</Text>
                      </TouchableOpacity>
                </View>
            </ScrollView>
             )
         }}
           
        </Formik>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    root:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        backgroundColor:"white"
    },
    Top:{
      display:"flex",
      flex:0.5,
      alignItems:"center",
      marginTop:50,

    },
    Image:{
        display:"flex",
        flex:1,
       width:"55%",
       zIndex:1,
       position:"relative",
       top:33
    },
    bottom:{
        display:"flex",
        flex:0.5,
        flexDirection:"column",
        marginTop:30
    },
    Input:{
        width:"90%"
    },
    InputFocus:{
      width:"90%",
    }, 
    InputContainer:{
        display:"flex",
        marginTop:20,
        // justifyContent:"center",
        alignItems:"center"
    },
    CheckBoxContainer: {
        display: "flex",
        flex:1,
        width:"97%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    SignUpContainer:{
        display:"flex",
         justifyContent:"center",
         alignItems:"center",
         width:"50%",
         height:50,
         backgroundColor:color.primary,
         borderRadius:6,
         marginBottom:20
    },
    SignUp:{
        color:"white",
        fontWeight:"700",
    
    },
    checkBoxText:{
        color:color.primary,
        fontFamily:"700"
    }
   
})