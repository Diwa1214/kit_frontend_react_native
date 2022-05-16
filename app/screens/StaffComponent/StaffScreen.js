import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { View, Text,TouchableOpacity,StyleSheet, Image,  Alert, TextInput, SafeAreaView, FlatList } from 'react-native'
import { GetApi } from '../../../api/GetApi'
import color from '../color/color'
import LottieView from "lottie-react-native"
import { DeleteApi } from '../../../api/DeleteApi'
import Toast from 'react-native-toast-message'
import ToastComponent from '../Component/ToastComponent'


const StaffScreen = (props) => {
   const [ uploadScreen,SetUploadScreen] = React.useState(false)
   const [ loading,setLoading] = React.useState(true)
   const [text,SetText] = React.useState("")
    const {data,error,callback} = GetApi()
    
    const {data:deleteItem,error:deleteError,callback:cb} =DeleteApi()
    
   useEffect(()=>{
      
        callback("StudentSearch",text)
        //Fetch the data
      if(data){
         const dataTime= setTimeout(()=>{
            setLoading(false)
       },1500)
       return clearTimeout(dataTime)
        
      }
      //Error the dependence
       if(error){
           setLoading(false)
          Toast.show({
              position:"top",
              text1:"Error",
              text2:{error},
          })
       }
      
      
   },[loading,deleteItem,text])
  
   console.log(data,"detard");


    const handleDelete =(id)=>{
       Alert.alert("Delete","Are you surely want to delete this student",[
           {
           text:"cancle",
           style:"cancel"
          },
          {
              text:"Okay",
              onPress:()=>{
                cb("DeleteStudent",id)
              }
          }
    
    ])
    }
    const doSearch = async(text) =>{
       
    }
    return (
       <>
        <ToastComponent/>
         <View style={style.searchContainer}>
              <TextInput style={{flex:1,margin:7}} 
              autoCompleteType="name"
              autoCorrect 
              autoCapitalize="words" placeholder="Search" onChangeText={(text)=>{
                   SetText(text)
              }}/>
         </View>
        <SafeAreaView style={{...style.container}}>
           {(loading && !data) ? 
           <LottieView source={require("../../assests/loading.json")} autoPlay/> :( data && data.data.length!==0 ) ? 
           <FlatList data={data.data} renderItem={({item})=>{
               
               return(
                <TouchableOpacity style={{...style.personContainer}} onPress={()=>{
                    props.navigation.navigate("AddStudent",{
                        id:item._id
                    })
                }}>
                <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",flex:1,margin:12}}>
                     <View>
                       <Image source={require("../../assests/welcome-screen.png")} style={style.profile} />
                    </View>
                    <View style={style.studentName}>
                        <Text style={{fontWeight:"700"}}>{item.name}</Text>
                        <Text  style={{fontWeight:"700"}}>{item.RegNo}</Text>
                    </View>
                    <View>
                       <MaterialCommunityIcons name="delete" size={25} color="red" onPress={()=>{
                           handleDelete(item._id)
                       }}/>
                    </View>
                </View>
                
            </TouchableOpacity> 
             
          
               )
           }} keyExtractor={(item)=>{ return item._id}}  >
               
           </FlatList> 
           
           
           :<LottieView source={require("../../assests/No_data.json")} autoPlay/>
         }
        </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1
    },
    personContainer:{
        height:80,
        borderRadius:12,
        borderWidth:1,
        borderColor:color.primary,
        margin:12,
        flex:1
    },
   
    profile:{
        width:60,
        height:60,
        borderRadius:50
    },
    studentName:{
        flexDirection:"column",
        marginBottom:6
    },
    searchContainer:{
        width:"80%",
        height:50,
        justifyContent:"center",
        borderColor:color.primary,
        borderWidth:1,
        margin:40,
        borderRadius:26
    }
})

export default StaffScreen
