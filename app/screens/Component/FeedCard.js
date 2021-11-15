import React from 'react'
import { StyleSheet,View,Text,Image, TouchableHighlight} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

export default function FeedCard(props) {
    return (
             <Swipeable renderRightActions={props.righAction}>
                  <TouchableHighlight underlayColor="#ffff" onPress={props.onPress} >
          <View style={styles.FeedBack}>
              
              <View style={styles.messageContainer}>
                  <Image  source={props.profile} style={styles.userImage}/>
                  <View style={styles.message}>
                        <Text style={styles.userText}>{props.user}</Text>
                        <Text>{props.feedBack}</Text>
                 </View>
              </View>
                  <View>
                         <Text>{props.date}</Text>
                 </View>
             
           </View>
            </TouchableHighlight>
             </Swipeable>
            
        
       
    )
}


const styles = StyleSheet.create({
    FeedBack:{
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        margin:20
    },
    messageContainer:{
       display:"flex",
       flexDirection:"row",
    },

    message:{
        display:"flex",
        flexDirection:"column",
        marginLeft:12
    },
    userImage:{
        width:70,
        height:70,
        borderRadius:50
    },
    userText:{
        fontSize:14,
        fontWeight:"700",
    },
    userMessage:{
        fontSize:14,
        fontWeight:"500",
        color:"#A8A8A8"
    }
})