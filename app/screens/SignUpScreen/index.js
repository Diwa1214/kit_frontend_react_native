import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Checkbox, HelperText, TextInput } from 'react-native-paper'
import { Formik, useFormik } from 'formik'
import color from '../color/color'
import Toast, { BaseToast } from 'react-native-toast-message'
import * as Yup from "yup";
import { Url } from '../../../config'
import { useNavigation, useRoute } from '@react-navigation/native';

const SignUpScreen = (props) => {
   const [focus,setFocus] = React.useState(false)
   const [checked, setChecked] = React.useState(false);
   const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
   const navigation = useNavigation()
   const customStyle = focus ? styles.InputFocus : styles.Input 
   const [number,SetNumber] = React.useState(1)

  console.log(props?.navigation)
   const validateYupSchema = Yup.object().shape({
    name:Yup.string().required().label("Name"),
    email:Yup.string().email().required().label("Email"),
    password:Yup.string().required().min(7).label("Password"),
    confrim_password:Yup.string().oneOf([Yup.ref("password"),null],"Password mush match"),
    phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid')
   
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
   const handleSubmit =async(value)=>{
      let new_value = Object.assign(value,{staff:checked})
      console.log(value)
      const user = await fetch(`${Url.host}/CreateUser`,{method:"POST",
       headers:{
          'Content-type':"application/json"
       },
       body:JSON.stringify(value)
       
    })
    const response = await user.json()
    console.log(response)
    if(response?.status === '200'){
         navigation.navigate("login")
    }
    else {
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
              <Image source={require("../../assests/signup.png")} style={styles.Image}></Image>
        </View>
        <Formik initialValues={{name:"",email:"",password:"",confrim_password:"",phone:"",staff_id:""}} validationSchema={validateYupSchema} onSubmit={(value)=>{return handleSubmit(value)}}>
        {({setFieldValue,touched,setFieldTouched,values,errors,handleSubmit})=>{
             return (
            <ScrollView style={styles.bottom}>
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Name' style={customStyle} onChangeText={(text)=>{return setFieldValue("name",text)}} onFocus={handleFocus} error={errors.name}  ></TextInput>
                    <HelperText type='error' visible={errors.name}>{errors.name}</HelperText>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Email' style={customStyle} onChangeText={(text)=>{return setFieldValue("email",text)}} error={errors.email} ></TextInput>
                    <HelperText type='error' visible={errors.email}>{errors.email}</HelperText>

                </View>
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Phone no' style={customStyle} onChangeText={(text)=>{return setFieldValue("phone",text)}} error={errors.phone} ></TextInput>
                    <HelperText type='error' visible={errors.phone}>{errors.phone}</HelperText>

                </View>
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Password' style={customStyle} onChangeText={(text)=>{return setFieldValue("password",text)}} error={errors.password} passwordRules="@" ></TextInput>
                    <HelperText type='error' visible={errors.password}>{errors.password}</HelperText>

                </View>
                <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='Confrim Password' style={customStyle} onChangeText={(text)=>{return setFieldValue("confrim_password",text)}} error={errors.confrim_password} ></TextInput>
                    <HelperText type='error' visible={errors.confrim_password}>{errors.confrim_password}</HelperText>

                </View>
                 {checked ? <View style={styles.InputContainer}>
                    <TextInput mode='outlined' label='staff_Id' style={customStyle} onChangeText={(text)=>{ setFieldValue("staff_id",text) }} keyboardType={'number-pad'} ></TextInput>
                    {/* <HelperText type='error' visible={errors.confrim_password}>{errors.confrim_password}</HelperText> */}
                </View> :null}
                <View style={{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                     <View style={[{...styles.CheckBoxContainer,position:"relative",left:30}]}>
                         <View>
                               <Text style={[{...styles.checkBoxText,color:"black",fontWeight:"700"}]}>Already have an account </Text>
                         </View>
                         <TouchableOpacity onPress={()=>{return navigation.navigate("login")}}>
                                <Text style={[{...styles.checkBoxText}]}>Login</Text>
                         </TouchableOpacity>
                    </View>
                     <View style={styles.CheckBoxContainer}>
                            <Text style={styles.checkBoxText}>Staff</Text>
                            <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }} uncheckedColor={color.primary}></Checkbox>
                     </View>
                </View>
                <View style={{display:"flex",flex:1,alignItems:"center",marginTop:20}}>
                      <TouchableOpacity style={styles.SignUpContainer} onPress={handleSubmit} disabled={!checked ? false : checked && values.staff_id ==1214 ? false :true}>
                           <Text style={styles.SignUp}>SignUp</Text>
                      </TouchableOpacity>
                </View>
            </ScrollView>
             )
         }}
           
        </Formik>
    </SafeAreaView>
  )
}

export default SignUpScreen

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
      marginTop:50
    },
    Image:{
        display:"flex",
        flex:1,
       width:"55%",
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
        width:"90%",
        flexDirection:"row",
        alignItems:"center",
        position:"relative",
        right:7,
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