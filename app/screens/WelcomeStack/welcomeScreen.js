import React from 'react';
import {StyleSheet,View,Dimensions, Text, FlatList, TouchableOpacity} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import color from '../color/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {width:screenwidth}  = Dimensions.get("window")

function WelcomeScreen(props) {

  const data = [
   {
   item:"https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg"
 },
 {
  item:"https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg"
}, {
  item:"https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg"
}
]

const cardDetails =[
   {
   id:1,  
   title:"Attendance",
   navigate:"Academic",
   disabled:true,
   },
   {
   id:2, 
   title:"Notes",
   navigate:"Placement",
   disabled:true,
  },
  {
    id:3,
    title:"Result",
    navigate:"StudentLogin",
    disabled:false,
  },
  { id:4,
    title:"FeedBack",
    navigate:"News",
    disabled:true,
  }
]
 const _renderItem = ({item, index}, parallaxProps)=> {
   //console.log(item)
  return (
      <View style={styles.item}>
          <ParallaxImage
              source={require("../../assests/welcome-screen.png")}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.4}
              {...parallaxProps}
          />
         
      </View>
  );
}

  return (
    <>
      <View style={{paddingTop:30,alignItems:"center",flex:0.6,overflow:"hidden"}}>
           <Carousel
            sliderWidth={screenwidth}
            itemWidth={300} 
            hasParallaxImages={true}
            data={data}
            renderItem={_renderItem}
            autoplay={true}
            loopClonesPerSide={3}
            loop={true}
           />
        
        </View>
        <View style={styles.DetailsContainer} activeOpacity={0.4}>
             <FlatList data ={cardDetails}numColumns={2}  renderItem={({item})=>{
               return (
                <TouchableOpacity style={styles.DetailsCardContainer} activeOpacity={0.7}  onPress={()=>{
                  props.navigation.navigate(item.navigate)
                 }} disabled={item.disabled}>
                  <Text style={styles.cardText}>{item.title}</Text>
                  <MaterialCommunityIcons name="arrow-expand-all"  size={17} color={color.primary}/>
               </TouchableOpacity>
               )
             }} keyExtractor={(item)=>{return item.id }}>

             </FlatList>
              
             
          </View>
     </>
  
  )
 }

 const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 210,
    elevation:12
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 11,
    elevation:12
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode:"contain",
  },
  DetailsContainer:{
    flex:1,
    paddingLeft:12,
    marginLeft:20
  },
  DetailsCardContainer:{
    width:"40%",
    height:60,
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:10,
    borderColor:color.primary,
    borderWidth:1,
    borderLeftColor:color.primary,
    borderLeftWidth:6,
    justifyContent:"space-around",
    alignItems:"center",
    marginHorizontal:7,
    marginVertical:14
  },
  cardText:{
    fontSize:17,
    fontWeight:"600",
    color:color.primary
  }
})

export default WelcomeScreen;
