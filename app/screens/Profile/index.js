import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import color from '../color/color'
import authStorage from '../Storage/authStorage'
import { AuthContext } from '../Context/AuthContext'
import { useNavigation } from '@react-navigation/native'

const Profile = (props) => {
  const {setUser,user} = React.useContext(AuthContext)
  const navigation = useNavigation()
  const Logout = ()=>{
   authStorage.deleteToken()
   setUser(null)
   navigation.navigate("login")
  }

  return (
    <View style={styles.root}>
        <View>
            
        </View>
        <Formik initialValues={{name:"",fatherName:"",motherName:"",address:"",phoneNo:"",FatherNo:"","10thmark":"","12mark":"",AdhaarNo:"",college:"",year:"",department:"",regno:""}} onSubmit={(values)=>{console.log(values)}}>
           {({})=>{
              return (
                 <ScrollView style={styles.TextFieldContainer}>
                     {user?.staff ? 
                     <>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>Profession</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}    />
                        </View>
                     </View>
         
      
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>phone Number</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
       
               
                     
                     
                     </> : 
                     <>
                    <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>name</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}    />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>father Name</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>mother Name</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>address</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}  />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>phone Number</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>Alternative Number</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>10th mark</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}  />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>12th mark</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>10th percentage</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}/>
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>12th percentage</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>Adhaar Number</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}   />
                        </View>
                     </View>
                     
                     </> }
                     <View style={styles.LogoutContainer}>
                         <TouchableOpacity style={styles.logout} onPress={Logout}>
                               <Text style={styles.LogoutText}>Logout</Text>
                         </TouchableOpacity>
                     </View>
                    
                     {/* <View style={styles.Box}>
                        <View style={styles.LableContainer}>
                          <Text style={styles.labelName}>Register Number</Text>
                       </View>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TextInput style={styles.TextField}  />
                        </View>
                     </View> */}

                      
                 </ScrollView>
              )
           }}
        </Formik>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  root:{
    display:"flex",
    flex:1,
    flexDirection:"column",
  },
  TextFieldContainer:{
    display:"flex",
    flexDirection:"column",
    marginBottom:30,
  },
  LableContainer:{
    width:"90%",
    position:"relative",
    left:22,
  },
  labelName:{
    fontSize:15,
    fontWeight:"700",
    textTransform:"capitalize",
    color:"black",
  },
  TextField:{
     width:"90%",
     borderWidth:1,
     borderColor:color.primary,
     padding:15,
     borderRadius:10,
     color:color.primary,
     fontWeight:"700",
     fontSize:16,
     marginTop:10
  },
  Box:{
    marginTop:10
  },
  LogoutContainer:{
     display:"flex",
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     marginTop:20
  },
  logout:{
     width:"50%",
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:color.primary,
     height:50,
     borderRadius:6
  },
  LogoutText:{
     color:"white",
     fontWeight:"700"
  }
})