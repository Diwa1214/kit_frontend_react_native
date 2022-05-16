 import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
 import React,{useEffect,useCallback} from 'react'
 import color from '../../color/color'
 import { AntDesign } from '@expo/vector-icons'
import { CSESubjects } from '../../data/Grade'

 
 const SemesterComponent = ({result})=>{
   let sem1=[]
   let sem2=[]
   let sem3=[]
   let sem4=[]
   let sem5=[]
   let sem6=[]
   let sem7=[]
   let sem8 =[]
   const [semester,setSemester] = React.useState(null)
   const [sem1Gpa,setSem1Gpa] = React.useState(null)
   const [sem2Gpa,setSem2Gpa] = React.useState(null)
   const [sem3Gpa,setSem3Gpa] = React.useState(null)
   const [sem4Gpa,setSem4Gpa] = React.useState(null)
   const [sem5Gpa,setSem5Gpa] = React.useState(null)
   const [sem6Gpa,setSem6Gpa] = React.useState(null)
   const [sem7Gpa,setSem7Gpa] = React.useState(null)
   const [sem8Gpa,setSem8Gpa] = React.useState(null)
    const MarkCalculate = useCallback((data)=>{
        // First semester 
       if(data[0]?.length > 0){   
        data[0]?.map((item)=>{
            
            let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
        return    grades?.map((items1)=>{
            const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
           
               if(grade !==undefined){
                   let a = {}
                   a = {...grade}
                   a["grade"] = items1[1]
                   a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                   a["total_grade"] =   a?.credit * a.subject_grade 
                   return sem1.push(a)
               }
               else{
                   return sem1
               }
            })
    })
       }
       //  Second Semester  
       if(data[1]?.length > 0){
        data[1]?.map((item)=>{
        
            let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
        return    grades?.map((items1)=>{
            const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
           
               if(grade !==undefined){
                   let a = {}
                   a = {...grade}
                   a["grade"] = items1[1]
                   a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                   a["total_grade"] =   a?.credit * a.subject_grade 
                   return sem2.push(a)
               }
               else{
                   return sem2
               }
            })
    })
      }

      if(data[2]?.length > 0){
        data[2]?.map((item)=>{
        
            let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
        return    grades?.map((items1)=>{
            const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
           
               if(grade !==undefined){
                   let a = {}
                   a = {...grade}
                   a["grade"] = items1[1]
                   a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                   a["total_grade"] =   a?.credit * a.subject_grade 
                   return sem3.push(a)
               }
               else{
                   return sem3
               }
            })
    })
      }


    //  Fourth Semester
        if(data[3]?.length > 0){
            data[3]?.map((item)=>{
            
                let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
            return    grades?.map((items1)=>{
                const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
               
                   if(grade !==undefined){
                       let a = {}
                       a = {...grade}
                       a["grade"] = items1[1]
                       a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                       a["total_grade"] =   a?.credit * a.subject_grade 
                       return sem4.push(a)
                   }
                   else{
                       return sem4
                   }
                })
        })
        }
    //   Fifth semester
         if(data[4]?.length > 0){
            data[4]?.map((item)=>{
            
                let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
            return    grades?.map((items1)=>{
                const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
               
                   if(grade !==undefined){
                       let a = {}
                       a = {...grade}
                       a["grade"] = items1[1]
                       a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                       a["total_grade"] =   a?.credit * a.subject_grade 
                       return sem5.push(a)
                   }
                   else{
                       return sem5
                   }
                })
        })
        }
        // Sixth Semester 
         if(data[5]?.length > 0){
            data[5]?.map((item)=>{
            
                let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
            return    grades?.map((items1)=>{
                const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
               
                   if(grade !==undefined){
                       let a = {}
                       a = {...grade}
                       a["grade"] = items1[1]
                       a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                       a["total_grade"] =   a?.credit * a.subject_grade 
                       return sem6.push(a)
                   }
                   else{
                       return sem6
                   }
                })
        })
        }
        // Seventh Semester
         if(data[6]?.length > 0){
            data[6]?.map((item)=>{
            
                let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
            return    grades?.map((items1)=>{
                const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
               
                   if(grade !==undefined){
                       let a = {}
                       a = {...grade}
                       a["grade"] = items1[1]
                       a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                       a["total_grade"] =   a?.credit * a.subject_grade 
                       return sem7.push(a)
                   }
                   else{
                       return sem7
                   }
                })                                  
        })
        }
        // Eighth Semester
         if(data[7]?.length > 0){
            data[7]?.map((item)=>{
            
                let grades = item?.student?.length > 0 ? Object.entries(item?.student[0]) : null
            return    grades?.map((items1)=>{
                const grade = CSESubjects.find((i)=>{return i.name === items1[0]})
               
                   if(grade !==undefined){
                       let a = {}
                       a = {...grade}
                       a["grade"] = items1[1]
                       a["subject_grade"] = items1?.[1] === "O" ? 10 : items1?.[1] === "A+" ? 9 : items1?.[1] === "A" ? 8 : items1?.[1] === "B+" ? 7 :items1[1] === "B" ? 6 :null
                       a["total_grade"] =   a?.credit * a.subject_grade 
                       return sem8.push(a)
                   }
                   else{
                       return sem8
                   }
                })
        })
        }

        
        //  console.log(grade,"g")
    }  )


       
    useEffect(()=>{
        const getCalucate = async()=>{
            if(result?.length >0){
                  let m = await MarkCalculate(result)
                  setSemester(m)
                  if(sem4?.length > 0){
                      let marks = sem4?.reduce((a,b)=>{
                           return b.total_grade !== NaN ?  a + b?.total_grade :0
                      },0)
                      let give_grade = sem4?.reduce((a,b)=>{
                         return  a + b.credit 
                    },0)
                    let calculatedGrade = marks / give_grade
                    setSem4Gpa(calculatedGrade)
                 }
               }  
        }
         getCalucate()


    },[result,sem4])

    
    return (
       <>
         {result?.map((item,index)=>{
               const s = item.length > 0 ? Object.entries(item[0]?.student[0]) :null
               let item1 = item.length > 0 ? s.shift() : null
               let item2 = item.length > 0 ? s.shift() : null
               let item3 = item.length > 0 ? s.shift() : null
               let item4 = item.length > 0 ? s.shift() : null
               return (
                  <View style={Styles.ResultBoxContainer}>
                  <View style={Styles.ResultBoxHeader}>
                        <View>
                               <Text style={Styles.tableHeader}>Semester {index + 1}</Text>
                        </View>
                        <TouchableOpacity style={{display:"flex",flexDirection:"row"}} disabled={item?.length <=0}>
                             <Text style={[Styles.DrakColor,{color:color.primary,paddingRight:20}]}>Download</Text>
                             <AntDesign name='download' size={18} color={color.primary} />
                        </TouchableOpacity>
                  </View>

                  {item?.length > 0 && s !== null  ?
                   <>
             <View style={Styles.ExamContentContainer}>
                  {s.map((node,ind)=>{
                        return (
              <>
                  <View style={Styles.ExamContentBox}>
                        <View style={Styles.SINO}>
                              <Text>{ind + 1}</Text>
                        </View>
                        <View style={Styles.ExamName}>
                              <Text style={[Styles.DrakColor,{paddingLeft:20}]}>{node?.[0]}</Text>
                        </View>
                        <View style={Styles.ExamMark}>
                              <Text style={Styles.DrakColor}>{node?.[1]}</Text>
                        </View>
                        <View style={Styles.ExamStatus}>
                               <AntDesign name='checkcircle' color="green" size={17}/>
                        </View>
                   </View>
              </>
                        )
                  })}
             </View>
            </> :
                          <View>
                               <Text>No Semester mark</Text>
                         </View>}
            
                  
            
                   
                  </View> 
               )
         })}
       </>
    )
 }





 const SemesterResult = ({data}) => {
    const [semvisible,setSemVisible] = React.useState(false) 
    let semesterData = Object.values(data)

    const handleCIA= ()=>{
        setSemVisible(!semvisible)
    }
   return (
    <View style={Styles.container}>

    <View style={Styles.ExamContainerBox}>
         <View style={{display:"flex",width:"100%"}}>
          <View style={Styles.ExamBox}>
                  <View>
                      <Text style={Styles.tableHeader}>Semester Results</Text>
                  </View>
                  <TouchableOpacity onPress={handleCIA}>
                      {semvisible ? <AntDesign name='arrowup' size={20} color={color.primary}/> :
                      <AntDesign name='arrowdown' size={20} color={color.primary}/>  } 
                  </TouchableOpacity>
          </View>
         </View>
        {semvisible ?  <SemesterComponent result ={semesterData}/> :null}
    </View>
</View>
   )
 }
 
 export default SemesterResult
 
 const Styles = StyleSheet.create({
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
      height:85,
      flexDirection:"row",
        elevation:2.5,
        padding:8,
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