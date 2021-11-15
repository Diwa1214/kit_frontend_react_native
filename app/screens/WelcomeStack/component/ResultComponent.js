import React, { useEffect, useMemo } from 'react'
import { View, Text ,StyleSheet,Dimensions,Image} from 'react-native'
import color from '../../color/color'
const {width:screenWidth, height:screenHeight} =Dimensions.get("window") 

const ResultComponent = ({item}) => {
   let total =[]
   let totalMark 
//    const t = useMemo((m)=>{
//         total.push(m)
//    },[total])
//     console.log(total,"toal"); 
   item.subject.map((item)=>{
    //   console.log(item.marks);
    return total.push(item.marks)
   })
   
   total.length > 0 ? total.reduce((a,b)=>{
        return totalMark = a +b;
   },0) :null

   useEffect(()=>{
   },[total])
  console.log(totalMark,"totall");

    return (
        <View style={Styles.ResultContainer}>
               <View>
                <Image source={require("../../../assests/welcome-screen.png")} style={Styles.resultImage} />
              </View>
               <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                 <Text style={Styles.resultName}>{item.name}</Text>
             </View>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                 <Text style={Styles.resultName}>{item.RegNo}</Text>
                 <Text style={Styles.tableHeader}>{item.year}</Text>
             </View>
              <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                <Text style={Styles.resultClg}>{item.ClgName}</Text>
              </View> 
              
                    <View style={Styles.resultContent}>
                    <View style={Styles.resultHeader}>
                        <Text style={Styles.tableHeader}>Subject Type</Text>
                        <Text  style={Styles.tableHeader}>Subject Name</Text>
                        <Text  style={Styles.tableHeader}>Mark</Text>
                    </View>
                    {item.subject.length ==0 ? <View>
                        <Text>No data</Text>
                    </View>:item.subject.map((items)=>{
                 return(
                     <>
                    <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:20}} key={items._id}>
                       {/* <Text style={{alignItems:"center",justifyContent:"flex-start"}}>{items.subjectType}</Text>
                        <Text numberOfLines={3}>{items.subjectName}</Text>
                        <Text style={{alignItems:"center",justifyContent:"center"}}>{items.marks}</Text>  */}
                       <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1,margin:screenWidth /31,marginLeft:screenWidth /14}}>
                             <View>
                                 <Text>{items.subjectType}</Text>
                             </View>
                             <View>
                                 <Text >{items.subjectName}</Text>
                             </View>
                             <View>
                                 <Text style={Styles.mark}>{items.marks}</Text>
                             </View>
                       </View>
                    </View>
                    </>
                     )
                    }
                    
                    )}
                
                <View style={{flex:1,justifyContent:"flex-end",flexDirection:"row",alignItems:"center",marginRight:10}}>
                       <Text >Total {totalMark}</Text>
                </View>  
               </View>
               
              </View>
    )
}

const Styles = StyleSheet.create({
    ResultContainer:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        flex:1
    },
    resultImage:{
        width:70,
        height:70,
        borderRadius:50
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
    resultContent:{
        marginTop:12,
      width:screenWidth - 40,  
      height:screenHeight - 350,
      borderRadius:20,
      backgroundColor:"white",
      flexDirection:"column"
    },
    resultHeader:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        paddingTop:15
    },
    tableHeader:{
        fontWeight:"700",
        color:"#778899", 
        fontSize:14
    },
    mark:{
        color:"green"
       
    }
})

export default ResultComponent
