import axios from 'axios'
import { isString } from 'formik'
import React,{useState} from 'react'
import { Url } from '../config'

export default PostApi = () => {
  const [loading, setLoading] = useState(true)
  const [data,setData] =useState("")
  const [updateData,setUpdate] = useState(null)
  const [error,setError] =useState("")



  const callback =async(pro,endpoint,id,...argu)=>{
     console.log(endpoint);
    // console.log(id,"id");
    let url
    
    if(id ==null){
      url = `${Url.host}/${endpoint}`
    }
    else{
      url = `${Url.host}/${endpoint}?id=${id}`
    }
    try {
      setData("")
      setError("")
      setUpdate(null)
      if(id == null){
        const response = await axios.post(url,...argu,{
         onUploadProgress:(progress)=>{
            pro(progress)
         },
          
       }) 
       console.log(response.data.status === '200');
       if(response.data.status == "200"){
         setLoading(false)
        return setData(response.data)
      }
      if(response.data.status =="404" || response.data.status =="500"){
        response.data.msg ?  setError( response.data.msg) : setError("Network failed")
        setLoading(false)
      }
     }
     else{
      const response = await axios.put(url,...argu,{
        onUploadProgress:(progress)=>{
           pro(progress)
        } 
      }) 
      if(response.data.status == "200"){
        setUpdate(response.data)
        setLoading(false)
     }
     if(response.data.status =="404" || response.data.status =="500"){
       setError("Network failed")
       setLoading(false)
     }
     }

    } catch (err){
       console.log(err);
    }
   
}
  
  


  return {
    loading,
    data,
    callback,
    updateData,
    error
  }
}



