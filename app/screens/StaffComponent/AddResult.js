import { MaterialCommunityIcons } from '@expo/vector-icons'
import React,{useEffect, useMemo} from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View,Text} from 'react-native'
import color from '../color/color'
import ImageComponent from '../Component/AccountComponent'
import TextInputComponent from '../Component/TextInput'
import ModalComponent from '../Component/Modal'
import { resultData } from '../data/result'
import PostApi from '../../../api/PostApi'
import UploadScreen from '../Component/UploadScreen'
import { Formik } from 'formik'
import * as Yup from "yup";
import ErrorComponent from './ErrorComponent'
import FullModal from '../Component/FullModal'
import {GetApi} from "../../../api/GetApi"
import Toast from 'react-native-toast-message'
import ToastComponent from '../Component/ToastComponent'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'


const AddResult = (props) => {
    const [state,SetState] =React.useState(
        {
         name:"",
         regno:null,
         clgName:"",
         profile:"",
         visiblity:false,
         year:"",
         Clgvisiblity:false,
        
        }
    )
    let subject =[]
    const [uploadScreen,SetUploadScreen] = React.useState(false)
    let navigate = useNavigation()
    const [subjectmark, setSubjectMark] = React.useState([])
    const [progress,setProgress] = React.useState(0)
    const id = props.route?.params?.id
    const [m,setM]= React.useState("")
    const [ opacity,setOpacity] = React.useState(1)
    let render = [] 
    let final_Data;
    ///Function for progress
    function Progress(p){
     let pro=  p.loaded / p.total
     setProgress(pro)
    }
     //post the data
    let {callback,pro,updateData} =  PostApi()


    //Sumbit the form
    const handleSubmited =(values)=>{ 
      console.log(values);
      final_Data = Object.assign(values,{subjectmark})
      console.log(final_Data,"dta");
        SetUploadScreen(true)
      if(id){
        callback(Progress,"updateStudent",id,final_Data)
      }
      else {
        callback(Progress,"postResult",null,final_Data)
      }
        setTimeout(()=>{
        SetUploadScreen(false)
        navigate.navigate("admin")

       },3100)
    }

   const validateYupSchema = Yup.object().shape({
       name:Yup.string().required().label("*Name"),
       regno:Yup.mixed().required().label("*Register Number"),
       clgName:Yup.string().required().label("*College Name"),
   })


   const {callback:cb,data,error,res} = GetApi()



   const listMark = useMemo(()=>{
     if(res){
       res.data.data[0].subject.map((items)=>{
       render.push(items.marks)
       })
     }
   },[res,render,updateData])


   // console.log("rerender",render);
   const getStudent = useCallback(async() =>{
    cb("getStudentDetails",id)
},[])
  
   
   useEffect(() => {
     if(id){
       getStudent()
      }
      if(updateData){
         props.navigation.navigate("Admin")
      }
     
     
}, [listMark,updateData])

    return (
        <>
       
         <ScrollView style={{flex:1,opacity:opacity}}>
         <ToastComponent/>
              <UploadScreen visible={uploadScreen} Progress={progress}/>


              <Formik initialValues={{name : "" , regno:"", profile:"",clgName:"",year:""}} onSubmit={(values)=>{
              }} validationSchema={validateYupSchema}>
                  {({handleSubmit,touched,errors,setFieldValue,values,setFieldTouched,setValues})=>{
                     
                     return (
                       
                         <>
                        <TextInputComponent name ="account-cowboy-hat" placeholder="Enter the name" onChangeText={(text)=>{
                           setFieldValue("name",text  )
                    
                        }}onBlur={()=>{setFieldTouched("name")}} defaultValue={data ? data.data[0].name:values["name"]} />
                        {(errors.name && touched)  ? <ErrorComponent text={errors.name}/> : null}


                        <TextInputComponent name ="account-cowboy-hat" placeholder="Enter the Register Name" onChangeText={(text)=>{
                           setFieldValue("regno",text)
                        }}onBlur={()=>{setFieldTouched("regno")}} defaultValue={data ? data.data[0].RegNo:values["regno"]}  />
                        {(errors.regno && touched)  ? <ErrorComponent text={errors.regno}/> : null}

                       

                       
                        <ImageComponent onChange={(uri)=>{ setFieldValue("profile",uri)}} marginBottom={12} />
                        

             <FullModal handleClgModal ={(value)=>{
                 setFieldValue("clgName",value)
             }}/>
             
             {(values["clgName"] || data )?  <TextInputComponent name ="account-cowboy-hat" value ={values["clgName"] || data.data[0].ClgName}  /> : null}

             <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-around"}}onPress={()=>{ SetState (  {...state, visiblity:true} )}}>
                   <View style={styles.options}>
                       <MaterialCommunityIcons name="arrow-collapse-down" size={24} color="white"/>
                       <Text style={{color:"white",fontSize:16,fontWeight:"700"}}>Choose the Year</Text>
                   </View>
             </TouchableOpacity>
     
              
              {(values["year"] || data )?  <TextInputComponent name ="account-cowboy-hat"  value ={values["year"] || data.data[0].year}/> : null}
               
              {resultData.map((item)=>{
                    let o =""
                    //console.log(item.year == state.value);
                  if (item.Year == (values["year"] || (data ? data.data[0].year:null))) {
                      return (
                         item.subject.map((item,index)=>{
                            subject.push(item)
                             return(

                                 <View key={index} >

                                     
                                     {/* {console.log(typeof(JSON.stringify(render[index])),"i")} */}
                                        <TextInputComponent name ="trophy-award"   value={item.subjectName} />
                                      <TextInputComponent name ="spa-outline" placeholder="Enter Mark" onChangeText={(text)=>{
                                        setM(text)
                                        let v = subject.map((item,x)=>{
                                          if(x==index){
                                            return subject[x]={
                                                ...item.marks = text  ,
                                                ...subject[x]
                                            }
                                          }
                                          return item
                                        })
                                        setSubjectMark(v)
                                       }}  type="number-pad" defaultValue={render ?JSON.stringify(render[index]) :""} /> 
                                      
                                     
                                     
                                     
                                    
                                     
                                 </View>
                             )
                         }) 
                      )
                }})}

             

                      <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:15}} onPress={()=>{
                        
                        handleSubmited(values)
                      }}>
                          <View style={{...styles.options,backgroundColor:color.primary}}>
                                   <MaterialCommunityIcons name="send" size={28} color="white"/>
                                   <Text style={{color:"white",fontSize:18}}>Submit</Text>
                           </View>
                   </TouchableOpacity>
                   <ModalComponent handleBackDrop ={()=>{return SetState({...state,visiblity:false})}}  handleSwipe={()=>{ return SetState({...state,visiblity:false})}} visiblity={state.visiblity} 
                         handleSelect={(value)=>{
                           setFieldValue("year",value)
                           SetState({
                               ...state,
                               visiblity:!state.visiblity
                           })
                         }}
                      />
                        </> 
                     )
                  }}

              </Formik>
             
             

             
         </ScrollView>
         </>
    )
}



const styles =StyleSheet.create({
    options:{
        width:"90%",
        height:50,
        backgroundColor:color.primary,
        borderRadius:30,
        margin:23,
        marginTop:60,
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row",
    },
    childOptions:{
       
        justifyContent:"space-between",
       
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
         alignItems: 'flex-end'
    },
    content: {
        width: '95%',
        height: '50%',
        backgroundColor: 'white',
        overflow: 'hidden',
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



export default AddResult
