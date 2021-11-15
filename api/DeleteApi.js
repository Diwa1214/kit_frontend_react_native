import axios from 'axios'
import React,{useCallback, useState} from 'react'
import { Url } from '../config'

export const DeleteApi = () => {
  const [loading, setLoading] = useState(true)
  const [data,setData] =useState(null)
  const [error,setError] =useState("")


  const callback =async(endpoint,id)=>{
    
        let url = `${Url.host}/${endpoint}?data=${id}`
   const response  = await axios.delete(url)
   // console.log(response,"res");
   //console.log(response,"r");
   if(response.data.status == "200"){
      setData(response.data.data)
      setLoading(false)
   }
   //console.log(data,"del");
   if(response.data.status =="404" || response.data.status =="500"){
     setError(response.data.msg)
     setLoading(false)
   }
  }

  return {
    loading,
    data,
    callback,error
  }
}



