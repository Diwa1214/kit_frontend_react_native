import * as SecureStore   from "expo-secure-store";

let key = "TOKEN";


const storeToken = async(value)=>{
   try{
      return await SecureStore.setItemAsync(key,value)
   }catch(error){
     console.log("Storing token",error)
   }
}

const getToken = async ()=>{
    try{
      return await SecureStore.getItemAsync(key)
    }
    catch(error){
    console.log("Getting token error",error)
    }
}

const deleteToken  = async ()=>{
    try {

        return await SecureStore.deleteItemAsync(key)
        
    } catch (error) {
        console.log("Deleting the token" ,error); 
    }
}

export default {storeToken,getToken,deleteToken}