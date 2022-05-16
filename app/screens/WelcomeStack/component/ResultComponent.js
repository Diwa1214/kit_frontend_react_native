import { AntDesign } from '@expo/vector-icons'
import React, { useEffect, useMemo } from 'react'
import { View, Text ,StyleSheet,Dimensions,Image,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import color from '../../color/color'
import ModalResult from './ModalResult'
import SemesterResult from './SemesterResult'
const {width:screenWidth, height:screenHeight} =Dimensions.get("window") 

const ResultComponent = (props) => {
   const [ciavisible,setCatVisible] = React.useState(false) 
   const [data,setData] = React.useState([])
   const  ResultData = props?.route?.params?.student
   let total =[]
   const item = []
   let totalMark 
//    const t = useMemo((m)=>{
//         total.push(m)
//    },[total])
//     console.log(total,"toal"); 
//    item?.subject.map((item)=>{
//     //   console.log(item.marks);
//     return total?.push(item.marks)
//    })
   
//    total?.length > 0 ? total?.reduce((a,b)=>{
//         return totalMark = a +b;
//    },0) :null

   useEffect(()=>{
      
     if(Object.keys(ResultData).length > 0){
        setData(ResultData?.semester)
     }
     

   },[ResultData?.semester])

   const handleCIA= ()=>{
       setCatVisible(!ciavisible)
   }


    return (
        

             <View style={Styles.ResultContainer}>
               <View>
                <Image source={require("../../../assests/welcome-screen.png")} style={Styles.resultImage} />
              </View>
               <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                 <Text style={Styles.resultName}>{item?.name ? item?.name :"Diwakaram"}</Text>
             </View>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                 <Text style={Styles.resultName}>{item?.RegNo ?item?.RegNo :"710218310101"}</Text>
                 <Text style={Styles.tableHeader}>{item?.year?item?.year:"4"}</Text>
             </View>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                <Text style={Styles.resultClg}>{item?.ClgName?item?.ClgName:"KIT"}</Text>
              </View> 

              {/* CIA TABLE */}
              
              <ScrollView style={{display:"flex",flex:1,width:"100%"}} >
                   <ModalResult/>

                    <SemesterResult data={data}/> 
                   
              </ScrollView>

              

              
               
            </View>
    )
}

const Styles = StyleSheet.create({
    ResultContainer:{
        flexDirection:"column",
        alignItems:"center",
        display:"flex",
        width:"100%",
        flex:1,
        // justifyContent:"center",
        paddingTop:50,
    },
    resultImage:{
        width:70,
        height:70,
        borderRadius:50,
    },
    resultName:{
      fontSize:15,
      fontWeight:"700"
    },
    resultClg:{
        fontSize:16,
        color:color.primary,
        fontWeight:"700",
    },
    container:{
        display:"flex",
        width:"100%",
        paddingTop:50,
        flexDirection:"column",
        alignItems:"center"
    },
    ExamContainerBox:{
        display:"flex",
        width:"93%",
        height:"auto",
        borderWidth:1,
        paddingTop:18,
        paddingLeft:11,
        paddingRight:11,
        borderColor:color.primary,
        borderRadius:5,
        flexDirection:"column",
        marginBottom:20
    },
    ExamBox:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:30
    },
    ResultBoxContainer:{
       display:"flex",
       width:"100%",
       height:"auto",
       borderWidth:1,
       borderRadius:9,
       flexDirection:"column",
       borderColor:color.primary,
       marginBottom:40
    },
    ResultBoxHeader:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      padding:15
    },
    ExamContentContainer:{
       display:"flex",
       flexDirection:"column",
       width:"100%",
       alignItems:"center",
       padding:10,
       marginBottom:10
    },  
    ExamContentBox:{
      width:"100%",
      display:"flex",
      height:60,
      flexDirection:"row",
        elevation:2.5,
        paddingTop:5,
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
        borderTopLeftRadius:4,
        borderTopRightRadius:3,
    }, 
     tableHeader:{
        fontWeight:"700",
        color:"#778899", 
        fontSize:14
    },
    SINO:{
         flex:0.2,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    },
    ExamName:{
        flex:0.5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
    },
    ExamMark:{
        flex:0.15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",        
    },
    ExamStatus:{
        flex:0.15,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",        
    },
    DrakColor:{
        fontSize:14,
        fontWeight:"700"
    }
})

export default ResultComponent
