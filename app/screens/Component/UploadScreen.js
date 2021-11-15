import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import ProgressBar from 'react-native-progress/Bar';
import LottieView from "lottie-react-native"

/*<ProgressBar progress={0.9} width={200} />}*/


const UploadScreen = ({visible}) => {
    return (
        
             <Modal visible ={visible}>
                 <View style={styles.container}> 
                   
                         <LottieView loop={false} autoPlay source={require("../../assests/done.json")} style={styles.image} >

                         </LottieView>
                   


                 </View>
             </Modal>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:150
    }
})
export default UploadScreen
