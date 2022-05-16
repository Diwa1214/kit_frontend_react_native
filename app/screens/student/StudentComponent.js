import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Swipeable } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import color from '../color/color'


const StudentComponent = (props) => {
    let student = props.item
    const navigate = useNavigation()

    const Handlenavigate =(values)=>{
        navigate.navigate("studentProfile",{info:values})
    }
    console.log(props.item);

  return (
    //   <View style={{backgroundColor:"green",display:"flex",flex:1,width:"100%",alignItems:"center"}}>
          
          <Swipeable 
          containerStyle={styles.root} 
          childrenContainerStyle={styles.chidrenRoot} 
          renderRightActions={props.righAction} 
          renderLeftActions={props.LeftAction}
          overshootFriction={8}
          >

               <View style={styles.profileContainer}>
                     <Image style={styles.profile} source={{uri:'https://lh3.googleusercontent.com/yZ0A7ZlzaAIml5vokMtCwpzeszTGbEawSt-SWzTGh0qpFDgg1hV8crmVvOEliYvIx8atVYTjMeEDqWc0ZNM4mXaL81WayDqqPbmE'}} />
              </View>
               <View style={styles.studentInfo}>
                                  <View>
                                      <Text style={styles.name}>{ student.name}</Text>
                                  </View>
                                  <View>
                                      <Text style={styles.subtitle}>Year : {student.year}</Text>
                                  </View>
                </View>
                <View style={styles.studentInfo1}>
                                    <View>
                                        <Text  style={styles.name} >{student.college.slice(0,5)+ "..."}</Text>
                                    </View>
                                    <View>
                                      <Text style={styles.subtitle}>Dept : {student.department}</Text>
                                  </View>
                </View>
                <TouchableOpacity style={styles.navigate} onPress={()=>{
                    return props.handleNavigate()
                }}>
                      <AntDesign name="arrowright" size={24} color={color.primary} />                
                </TouchableOpacity>
          </Swipeable>
          
      
  )
}

export default StudentComponent

const styles = StyleSheet.create({
 root:{
        display:"flex",
        flex:0.18,
        width:"90%",
        backgroundColor:"white",
        borderRadius:10,
        padding:5,
        overflow:"hidden",
    },
    chidrenRoot:{
        display:"flex",
        flex:1,
        flexDirection:"row",
        zIndex:1,
        padding:8
    },
    studentCard:{
        width:"90%",
        height:70,
        backgroundColor:"white",
        borderRadius:10,
        flexDirection:"row"
    },
    profileContainer:{
        display:"flex",
        flex:0.2,
    },
    profile:{
       width:60,
       height:60,
       borderRadius:30,
       position:"relative",
       top:5,
       left:5
    }, 
    studentInfo:{
        display:"flex",
        flexDirection:"column",
        flex:0.4,
        // backgroundColor:"green"
    },
    studentInfo1:{
        display:"flex",
        flexDirection:"column",
        flex:0.3,
        // backgroundColor:"yellow"
    },
    navigate:{
       display:"flex",
       flex:0.1,
       justifyContent:"center",
       alignItems:"center"
    },
    name:{
        padding:6,
        fontSize:17,
        fontWeight:"bold"
    },
    subtitle:{
        paddingLeft:6,
        opacity:0.4
    }
})