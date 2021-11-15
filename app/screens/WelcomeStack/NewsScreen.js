import React, { useEffect } from 'react'
import { View, Text ,StyleSheet } from 'react-native'
import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';
const NewsScreen = () => {
    const [hasPermission, setHasPermission] =React. useState(null);
    const [faces, setFaces] =React. useState([])
  
    const faceDetected = ({faces}) => {
      setFaces({faces})
      console.log({faces})
    }
    if (hasPermission !== "granted") {
        return <Text>No access </Text>
      }
  
    useEffect(()=>{
        (async () => {
            const status  = await Camera.requestPermissionsAsync()
            console.log(status);
          })();
    },[])
    return (
        <View style={Styles.container}>
         <Camera
        style={{ flex: 1 }}
        type='front'
        onFacesDetected = {faceDetected}
        faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.none,
            runClassifications: FaceDetector.Constants.Classifications.none,
            minDetectionInterval: 100,
            tracking: true,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
        </View>
      </Camera>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    }
})


export default NewsScreen
