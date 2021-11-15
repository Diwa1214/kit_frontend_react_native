import axios from 'axios'
import { isString } from 'formik'
import React,{useCallback, useState} from 'react'
import { Url } from '../config'

export const GetApi = () => {
  const [loading, setLoading] = useState(true)
  const [data,setData] =useState("")
  const [res,setRes] = useState(null)
  const [error,setError] =useState("")


  const callback =async(endpoint,data)=>{
    let url 
    setData("")  
    setError("") 
    if(data && (!isString(data)) ){
      url =`${Url.host}/${endpoint}?name=${data.name}&regno=${data.regno}&clgName=${data.clgName}`
    }
    else if(data && (isString(data)) ){
      url =`${Url.host}/${endpoint}?id=${data}`
    }
    else{
      url = `${Url.host}/${endpoint}`
    }
    console.log(url,"url");
    try{
     
      //console.log(url,"url");
      const response  = await axios.get(url)
      
      if(response.data.status == "200"){ 
         setError("")
         setRes(response)
         setData(response.data)
         setLoading(false)
      }
      if(response.data.status =="404" || response.data.status =="500"){
        setError(response.data)
        setLoading(false)
      }
    }
    catch(error){
      console.log(error);
       setError("Network Failed")
    }
    console.log(error);
  
  }

  return {
    loading,
    data,
    res,
    callback,error
  }
}



