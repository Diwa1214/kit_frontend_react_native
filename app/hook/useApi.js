import axios from 'axios'
import React,{useCallback} from 'react'
import { View, Text } from 'react-native'

export default function useApi() {
  const [loading, setLoading] = React.useState(false)
  const [data,setData] =React. useState("")
 
  const cb =(endpoint)=>{
    console.log(endpoint);
  }
  
  return (
    loading,
    data,
    cb
  )
    
}
