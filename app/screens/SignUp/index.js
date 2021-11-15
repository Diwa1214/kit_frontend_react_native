import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import color from '../color/color'
import TextInputComponent from '../Component/TextInputComponent'
import ErrorComponent from '../StaffComponent/ErrorComponent'
import * as Yup from "yup";
import PostApi from '../../../api/PostApi'
import Toast, { BaseToast } from 'react-native-toast-message'


const index = (props) => {
  const [number,SetNumber] = React.useState(1)
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

 const validateYupSchema = Yup.object().shape({
   name:Yup.string().required().label("Name"),
   email:Yup.string().email().required().label("Email"),
   password:Yup.string().required().min(7).label("Password"),
   confirmPassword:Yup.string().oneOf([Yup.ref("password"),null],"Password mush match"),
   phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  
 })
 
 const Progress=(progress)=>{
    
 }


 const {data,callback,error} = PostApi()
 const handleSubmit= (values)=>{
   callback(Progress,"CreateUser",null,values)

 }

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
      //  console.log("data",data);
       props.navigation.navigate("SignIn",{values:data})
    }

    if(error){
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
    }
  },[error,data])
  console.log("signui", error);
  return (
    <ScrollView style={{flex:1}}>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
     <TouchableOpacity style={{flex:1,justifyContent:"center",opacity:number}} activeOpacity={1} onPress={Keyboard.dismiss} >
     <View style={{width:100,height:100}}></View>
     <View style={{alignItems:"center"}}>
         <Text style={{fontSize:23,fontWeight:"700",color:color.primary,textTransform:"uppercase"}}>SignUp</Text>
      </View>
      
      <Formik initialValues={{name:"",email:"",password:"",confirmPassword:"",phone:""}} 
      validationSchema={validateYupSchema} onSubmit={(value)=>{ handleSubmit(value)}}>
        
        {({setFieldValue,touched,setFieldTouched,values,errors,handleSubmit})=>{
          return (
            <>
            <TextInputComponent placeholder ="Enter the Name" 
            onChangeText={(text)=>{setFieldValue("name",text)}} onFoucs={()=>{
              setFieldTouched("name" ,true)
            }}/>
          
              {touched&& errors.name ? <ErrorComponent text={errors.name}/>:null}

            <TextInputComponent placeholder = "Enter the Email " type="email-address"  
            onChangeText={(text)=>{setFieldValue("email",text)}}/>

              {touched && errors.email ? <ErrorComponent text={errors.email}/>:null} 

            <TextInputComponent placeholder = "Enter the phone" type="phone-pad" 
             onChangeText={(text)=>{
              
               setFieldValue("phone",text)}}/>
             {touched && errors.phone ? <ErrorComponent text={errors.phone}/>:null}

            <TextInputComponent placeholder="Enter the password"  
            onChangeText={(text)=>{setFieldValue("password",text)}}  secure={true}/>
            {touched && errors.password ? <ErrorComponent text={errors.password}/>:null}

            <TextInputComponent placeholder ="Enter the confrimPassword"  
            onChangeText={(text)=>{setFieldValue("confirmPassword",text)}} secure={true} />


            {console.log(errors.confirmPassword)}
            {touched && errors.confirmPassword ? <ErrorComponent text={errors.confirmPassword}/>:null}

            <TouchableOpacity style={{alignItems:"center"}} onPress={handleSubmit}>
            <View style={styles.btn}>
              <Text style={{color:"white",fontWeight:"700"}}>Login</Text>
            </View>
           </TouchableOpacity>
             <View style={{alignItems:"center",marginTop:8,flexDirection:"row",justifyContent:"space-evenly"}}>
                   <Text style={{color:"black",fontWeight:"700"}}>Already have an account</Text>
                   <TouchableOpacity onPress={()=>{props.navigation.navigate("SignIn")}}>
                           <Text style={{color:color.primary,fontWeight:"700"}}>SignIn</Text>
                   </TouchableOpacity>
             </View>
            </>
          )
        }}

      </Formik>

       
     </TouchableOpacity>
    
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
  },
  text:{

  },
  btn:{
   
    height:40,
    borderWidth:1,
    backgroundColor:color.primary ,
    borderRadius:20,
    alignItems:"center",
    width:"50%",
    borderColor:color.primary,
    justifyContent:"center"
  }
})
