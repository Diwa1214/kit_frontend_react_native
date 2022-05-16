import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,Image,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import color from '../color/color'
import { Swipeable } from 'react-native-gesture-handler'

import AccountComponent from '../Component/AccountComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StudentComponent from './StudentComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as SMS from 'expo-sms';


const RightAction = () => {
    return (
        <View style={{width: 100, backgroundColor: 'red',justifyContent:"center",alignItems:"center",zIndex:1}} >
           <MaterialCommunityIcons name="delete" color="white" size={30} />
        </View>
    );
  }

const LeftAction = ({student})=>{
    console.log(student,"student");
    return (
        <View style={{width: 100, backgroundColor: 'green',justifyContent:"center",alignItems:"center"}} >
           <MaterialCommunityIcons name="email" color="white" size={30} />
        </View>
    );
}  

const ListStudent = (props) => {
 const router = useRoute()
 const [student,setStudent] = React.useState([])   
 const [loading,setLoading] = React.useState(true)
 const [value,setValue] = React.useState("")
 const navigate = useNavigation()

 const handleChange =(e)=>{
      setValue(e.target.value)
 }

 useEffect(()=>{
     if(props?.route?.params?.state?.length > 0){
        setTimeout(()=>{
            return setLoading(false)
        },600)
         return setStudent(props?.route?.params?.state)
     } 
 })


 const handleSms =async(item)=>{
     console.log(item.FatherNo);
    const { result } = await SMS.sendSMSAsync(
        [item.FatherNo],
        ` From ${item.college} .Your son ${item.name}, coming college to late, All the teachers warned (him) but (he) is not taking this seriously so we have thought to inform you because being a guardian you people can handle this situation more effectively.`,
        // {
        //   attachments: {
        //     uri: 'path/myfile.png',
        //     mimeType: 'image/png',
        //     filename: 'myfile.png',
        //   },
        // }
      );
      console.log(result);
 }


  return (
    <View style={styles.root}>
          <View style={styles.searchContainer}>
               <View style={styles.searchBox}>
                    <TextInput style={styles.TextInput} placeholder="Search the Student" onChange={(e)=>{return handleChange(e)}}></TextInput>
               </View>
          </View>
           {loading ? 
            <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
                 <ActivityIndicator size="large" color={color.primary}/>
           </View>:
           <View style={styles.ListContainer}>
               <FlatList data={student} renderItem={({item})=>{return (

                <View style={styles.rootContainer}>
                    <StudentComponent righAction={RightAction} LeftAction ={()=>{
                        return(
                            <View style={{width: 100, backgroundColor: 'green',justifyContent:"center",alignItems:"center"}} >
                                <TouchableOpacity onPress={()=>{
                                    return  handleSms(item)

                                }}>
                                      <MaterialCommunityIcons name="email" color="white" size={30} />
                                </TouchableOpacity>
                             </View>
                        ) 
                    
                }} item={item} handleNavigate={()=>{
                       return navigate.navigate("studentProfile",{info:item})
                    }}/>
                </View>
               )}} keyExtractor={(item)=>{return item._id}} ItemSeparatorComponent={Separator} >

               </FlatList>
          </View>
          }
    </View>
  )
}
const Separator = () => {
    return (
      <View style={{marginTop:20}} />
    );
  };

export default ListStudent

const styles = StyleSheet.create({

    root:{
        display:"flex",
        flex:1,
        flexDirection:"column"
    },
    searchContainer:{
        display:"flex",
        justifyContent:"center",
        flex:0.2,
        marginTop:30,
        // backgroundColor:"red",
        alignItems:"center"

    },
    ListContainer:{
        display:"flex",
        // alignItems:"center",
        // justifyContent:"center",
        flex:1,
        marginTop:10,
        marginBottom:18
        // backgroundColor:"green"
    },
    TextInput:{
        display:"flex",
        borderWidth:1,
        borderColor:color.primary,
        padding:10,
        borderRadius:30,
        color:color.primary,
        fontSize:16,
        fontWeight:"700"
    },
    searchBox:{
        width:"75%",
        paddingLeft:10
    },
    rootContainer:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        marginTop:10
    },
    
   


})